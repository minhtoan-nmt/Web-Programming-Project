export async function POST(request) {
    const body = await request.json();
    const res = await fetch("http://localhost/clients_api/updateCart.php", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(body)
    })
    if (!res) {
        console.log(res.status);
    }
    const data = res.json();
    return Response.json({data});
}