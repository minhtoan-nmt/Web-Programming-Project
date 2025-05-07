const API_BASE_URL = process.env.API_BASE_URL || "http://localhost";

import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

const UPLOAD_FOLDER = "/public/image/post/content";

export async function POST(request) {
  try {
    // const body = await request.json();

    // const res = await fetch(`${API_BASE_URL}/api/post/create-post/`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // });
  
    // const data = await res.json();

    const formData = await request.formData();
    const imageFile = formData.get("contentImg");

    if (!imageFile) {
      return new Response({
        "status": 400,
        "message": "Missing image file"
      });
    }


    const fileExtension = imageFile.name.split('.').pop();
    const uniqueFilename = `${uuidv4()}.${fileExtension}`;
    const imagePath = path.json(UPLOAD_FOLDER, uniqueFilename);

    await fs.writeFile(imagePath, buffer);
    
    const data = {
      "message": "Tạo bài viết mới thành công!"
    };
  
    return new Response(JSON.stringify(data), { // Return the data directly
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    return new Response({
      'error': e.message || String(e)
    }, {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}