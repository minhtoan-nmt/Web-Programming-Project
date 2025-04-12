export async function GET(request) {
    const id = request.nextUrl.searchParams.get('n');
    const res = await fetch(`http://localhost/api/get-posts?n=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await res.json();
  
    return Response.json({ data });
  }
  