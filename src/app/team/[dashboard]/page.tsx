export default async function test({params}: {params: {dashboard: string}}) {
  const {dashboard} = params;
  console.log("Server-side code in getServerSideProps:", dashboard);

  // Pass data to the
  return <div>hi</div>
}
