export async function GET(request, { params }) {
  const { query } = await params;
  const res = await fetch(`http://localhost/clients_api/searchItem.php?query=${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}