import { redirect } from "next/navigation";

export async function POST(request) {
    const data = await request.json();
    const username = data["username"];
    const password = data["password"];
    const res = await fetch("http://localhost/api/user/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Important!
      },
      body: JSON.stringify({
        "username" : username,
        "password" : password
      }),
    });
    if (!res.ok) {
        console.log(res.status);
    }
  
    const token = await res.json();
    return Response.json({ token })
}