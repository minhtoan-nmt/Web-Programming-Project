export async function POST(request, {params}) {
    const { id, quantity } = await params;
    const res = await fetch(`http://localhost/clients_api/addToCart.php?id=${id}&quantity=${quantity}`, {
        method: "POST",
    })
    if (!res.ok) {
        console.log(res.status);
    }
    const result = await res.json();
    
    return Response.json({ result })
}