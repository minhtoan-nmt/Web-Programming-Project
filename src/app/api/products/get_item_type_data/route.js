export async function GET() {
    const res = await fetch("http://localhost/clients_api/getItemTypeData.php");
    if (!res.ok) {
        console.log(res.status);
    }
    const data = await res.json();
    return Response.json({ data });
}