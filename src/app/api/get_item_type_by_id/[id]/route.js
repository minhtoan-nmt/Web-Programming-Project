export async function GET(request, { params }) {
    const { id } = await params;
    const res = await fetch(`http://localhost/clients_api/getItemtypebyid.php?id=${id}`);
    if (!res.ok) {
        console.log(res.status);
    }
    const data = await res.json();
    return Response.json({ data });
}