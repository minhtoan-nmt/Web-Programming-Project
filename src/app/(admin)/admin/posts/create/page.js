"use client";

import React, { useState } from "react";

export default function Dashboard() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const titleData = event.currentTarget.querySelector("#postTitle");
      const contentData = event.currentTarget.querySelector("#contentText");
      
      const title = titleData ? titleData.value : "";
      const content = contentData ? contentData.value : "";

      if (!title) {
        alert("Hãy nhập tiêu đề bài viết trước khi đăng bài");
        return;
      }
      if (!content) {
        alert("Hãy nhập nội dung bài viết trước khi đăng bài");
        return;
      }

      const formData = new FormData();
      formData.set("title", title);
      formData.set("content", content);
      formData.set("contentImg", image);

      const response = await fetch("/api/post/create", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        alert(`Lỗi: Không thể tạo bài viết mới. Code ${response.code}`);
        return;
      }

      const data = await response.json();
      alert(`Tạo bài viết mới thành công!`);
    } catch (e) {
      console.error("An error occurred:", e);
    }
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage) {
      setImage(selectedImage);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  return (
    <div className="m-4">
      <h1 className="text-3xl mb-6">Tạo bài viết mới</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="ml-2 font-bold mb-2">Tiêu đề</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          className="border-solid border-2 border-gray-400 rounded p-2 mb-2"
        />
        <label className="ml-2 font-bold mb-2">Nội dung bài viết</label>
        <textarea
          className="border-solid border-2 border-gray-400 rounded p-2 mb-2"
          id="contentText"
          name="contentText"
        />
        <label className="ml-2 font-bold mb-2">Thêm hình ảnh: </label>
        <input
          type="file"
          id="contentImg"
          name="contentImg"
          accept="image/*"
          onChange={handleImageChange}
          className="inline-flex items-center w-fit px-3 py-2 border-2 border-gray-400 rounded bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <p className="ml-2 mt-1 text-sm text-gray-500" id="file_input_help">
          SVG, PNG, JPG or GIF
        </p>

        {preview && (
          <div className="mb-4">
            <img
              src={preview}
              alt="Image Preview"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          </div>
        )}

        <button
          type="submit"
          className="w-fit px-5 py-3 rounded-xl mt-6 bg-[#435ebe] font-bold text-white hover:bg-blue-800"
        >
          Đăng bài viết
        </button>
      </form>
    </div>
  );
}
