export async function GET(request, {params}) {
    const { id } = await params;
    const res = await fetch(`http://localhost/admin_api/deleteItemtype.php?id=${id}`);
    if (!res.ok) {
        console.error(res.status);
    }
    const result = res.json();
    return Response.json({ result });
}