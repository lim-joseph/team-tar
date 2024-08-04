import os
from supabase import create_client, Client
import pandas as pd
import json
from sklearn.preprocessing import MultiLabelBinarizer, StandardScaler
from sklearn.cluster import KMeans

# Load environment variables
url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(url, key)

# Fetch data from Supabase
response = supabase.table("User").select("*").execute() 
df = pd.DataFrame(response.data)

# Function to parse interests
def parse_interests(interest_str):
    try:
        return interest_str["interest"]
    except (json.JSONDecodeError, KeyError, TypeError, AttributeError):
        return []

# Apply the parsing function
df["parsed_interests"] = df['interest'].apply(parse_interests)

# Binarize the parsed interests
mlb = MultiLabelBinarizer()
interests_binarized = mlb.fit_transform(df['parsed_interests'])
interests_df = pd.DataFrame(interests_binarized, columns=mlb.classes_)
data_combined = pd.concat([df, interests_df], axis=1)

# Select the features for clustering
features = interests_df.columns
X = data_combined[features]

# Apply K-means clustering
kmeans = KMeans(n_clusters=3, random_state=42)
df['Cluster'] = kmeans.fit_predict(X)


# Analyze clusters to find common interests
cluster_interests = data_combined.groupby('Cluster')[features].mean()

# Function to suggest interests based on cluster
def suggest_interests(user_id):
    user_cluster = df.loc[df['id'] == user_id, 'Cluster'].values[0]
    common_interests = cluster_interests.loc[user_cluster]
    suggested_interests = common_interests[common_interests > 0.5].index.tolist()
    return suggested_interests

# Update Supabase table with the cluster and suggested interests
def update_user(row):
    suggested_interests = suggest_interests(row['id'])
    print(f"Suggested interests for user {row['id']}: {suggested_interests}")
    response = supabase.table("User").update({
        "interest_group": row["Cluster"],
        "suggested_interests": suggested_interests
    }).eq("id", row["id"]).execute()
    print(f"Updated row with id {row['id']}: {response}")

# Apply the update function to each row in the DataFrame
df.apply(update_user, axis=1)
