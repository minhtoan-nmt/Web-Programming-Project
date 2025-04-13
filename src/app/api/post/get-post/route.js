export async function GET(request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const id = searchParams.get("id");
  const res = await fetch(`http://localhost/api/get-posts?id=${id}`, {
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