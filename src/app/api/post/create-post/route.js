const API_BASE_URL = process.env.API_BASE_URL || "http://localhost";

export async function POST(request) {
  try {
    const body = await request.json();

    const res = await fetch(`${API_BASE_URL}/api/post/create-post/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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