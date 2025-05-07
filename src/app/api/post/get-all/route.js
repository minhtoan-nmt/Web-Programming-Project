const API_BASE_URL = process.env.API_BASE_URL || "http://localhost";

export async function GET(request) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/post/get-all-posts`, {
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
    return new Response(JSON.stringify({
      "status": 500,
      "error": "Server error"
    }), { // Return the data directly
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
