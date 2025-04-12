export async function GET(request) {
  const res = await fetch("http://localhost/api/get-posts/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return Response.json({ data });
}
