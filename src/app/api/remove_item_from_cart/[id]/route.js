export async function POST(request, { params }) {
    const { id } = await params;
    const res = await fetch(`http://localhost/clients_api/removeFromCart.php?id=${id}`, {
        method: "POST",
    })
    if (!res.ok) {
        console.log(res.status);
    }
    const data = res.json();
    return Response.json({data});
}