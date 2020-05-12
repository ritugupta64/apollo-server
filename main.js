const GraphQL_URL = "http://localhost:9000/";

async function featchData() {
  const response = await fetch(GraphQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query{
        greeting
      }
    `,
    }),
  });

  const data = await response.json();
  return data
}

featchData().then((res) => {
    const heading = document.querySelector('h1')
    heading.textContent = JSON.stringify(res.data.greeting)
  console.log(res.data)
});
