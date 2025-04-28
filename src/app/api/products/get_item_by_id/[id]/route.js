export async function GET(request, { params }) {
    const { id } = await params;
    const res = await fetch(`http://localhost/clients_api/getItembyid.php?id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
   
    return Response.json({ data });
}