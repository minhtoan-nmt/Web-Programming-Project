export async function GET(request) {
  const res = await fetch("http://localhost/api/post/get-home-posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), { // Return the data directly
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
