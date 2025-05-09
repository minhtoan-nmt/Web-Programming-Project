const API_BASE_URL = process.env.API_BASE_URL || "http://localhost";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("query");
    const res = await fetch(`${API_BASE_URL}/api/comment/get-comment-from-post?query=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await res.json();
  
    return new Response(JSON.stringify(data), { // Return the data directly
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    return new Response({
      'status': 400,
      'error': e
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}