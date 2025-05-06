export async function GET(request, { params }) {
    const { id, cartid, status } = await params;
    const res = await fetch(`http://localhost/admin_api/setStatusInvoice.php?id=${id}&cartid=${cartid}&status=${status}`);
    if (!res.ok) {
        console.log(res.status);
    }
    const result = res.json();
    return Response.json({ result });
}