const API_BASE_URL = process.env.API_BASE_URL || "http://localhost";

import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

const UPLOAD_FOLDER = path.resolve(process.cwd(), "public", "image", "post", "content");

export async function POST(request) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get("contentImg");
    const title = formData.get("title");
    const content = formData.get("content");

    if (!imageFile) {
      return new Response({
        "status": 400,
        "message": "Missing image file"
      });
    }


    const fileExtension = imageFile.name.split('.').pop();
    const uniqueFilename = `${uuidv4()}.${fileExtension}`;
    const imagePath = path.join(UPLOAD_FOLDER, uniqueFilename);

    const buffer = await imageFile.arrayBuffer();
    await fs.writeFile(imagePath, Buffer.from(buffer));

    const imgName = uniqueFilename;
    const postData = {
      "title": title,
      "content": content,
      "content_img_src": imgName
    }
    
    const res = await fetch(`${API_BASE_URL}/api/post/create-post/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    
    if (!res.ok) {
      return new Response(JSON.stringify({
        "message": "Failed to upload new post. An error occurred on server side"
      }), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      })
    }

    return new Response(JSON.stringify({
      "message": "Tạo bài viết mới thành công!"
    }), { // Return the data directly
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({
      'error': e.message || String(e)
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}