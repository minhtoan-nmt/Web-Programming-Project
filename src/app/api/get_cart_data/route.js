export async function GET() {
    const res = await fetch("http://localhost/clients_api/getItemInCart.php");
    if (!res.ok) {
        console.log("Status: ", res.status);
    }
    const data = await res.json();
    return Response.json({ data });
}