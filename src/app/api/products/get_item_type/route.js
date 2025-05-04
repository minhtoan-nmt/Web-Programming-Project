export async function GET() {
    const data = await fetch("http://localhost/clients_api/getItemtype.php", {
        headers: {
            "Content-Type": "application/json",
        }
    })
    if (!data.ok) {
        console.log(data.status);
    }
    const result = await data.json();
    
    return Response.json({ result });
}