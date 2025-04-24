export const dynamic = 'force-static'
 
export async function GET() {
  const res = await fetch('http://localhost/clients_api/getItems.php', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}