export default async function test({params}: {params: {code: string}}) {
  const {code} = params;
  console.log("Server-side code in getServerSideProps:", code);

  // Pass data to the
}
