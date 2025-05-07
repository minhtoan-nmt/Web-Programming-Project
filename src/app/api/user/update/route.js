const API_BASE_URL = process.env.API_BASE_URL || "http://localhost";

export async function PATCH(request) {
  try {
    const body = await request.formData();
    const userData = {
      "id": body.get("id"),
      "first_name": body.get("firstName"),
      "last_name": body.get("lastName"),
      "citizen_id": body.get("citizenId"),
      "phone_num": body.get("phoneNum"),
      "address": body.get("address"),
      "birth_date": body.get("birthDate"),
    }

    const res = await fetch(`${API_BASE_URL}/api/post/update-post/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  
    const message = await res.json();
  
    return new Response(JSON.stringify(message), { // Return the data directly
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