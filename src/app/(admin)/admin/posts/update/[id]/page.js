"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Page({ params }) {
  const [postData, setPostData] = useState([]);
  const resolveParams = React.use(params);
  const id = resolveParams.id;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const titleInput = event.currentTarget.querySelector("#title");
    const contentTextarea = event.currentTarget.querySelector("#content");
    const imgSrcInput = event.currentTarget.querySelector("#imgSrc");

    const title = titleInput ? titleInput.value : "";
    const content = contentTextarea ? contentTextarea.value : "";
    const imgSrc = imgSrcInput ? imgSrcInput.value : "";

    try {
      const data = {
        title: title,
        content: content,
        img_src: imgSrc,
      };
      console.log(data);

      const response = await fetch("/api/post/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Tạo bài viết mới thành công!");
        titleInput.value = "";
        contentTextarea.value = "";
        imgSrcInput.value = "";
      } else {
        const errorData = await response.json();
        alert(`Lỗi: ${errorData.message || "Không thể tạo bài viết mới"}`);
      }
    } catch (e) {
      alert(`Lỗi: ${e.message || "Đã có lỗi xảy ra"}`);
      console.error("Error submitting comment:", e);
    }
  };

  useEffect(() => {
    const fetchInitData = async () => {
      const response = await fetch(`/api/posts/get-post?id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        // resolve later
      }

      const responseData = await response.json();
      const postData = responseData.data;
      setPostData(postData);
    }

    fetchInitData();
  }, [id]);

  return (
    <div className="m-4">
      <h1 className="text-2xl mb-6">Cập nhật bài viết {id}</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="ml-2 font-bold mb-2">Tiêu đề</label>
        <input
          type="text"
          id="title"
          name="title"
          className="border-solid border-2 border-gray-400 rounded p-2 mb-2"
        />
        <label className="ml-2 font-bold mb-2">Nội dung bài viết</label>
        <textarea
          id="content"
          name="content"
          className="field-sizing-content border-solid border-2 border-gray-400 rounded p-2 mb-2"
          rows={5}
        />
        <label className="ml-2 font-bold mb-2">Thêm link hình ảnh </label>
        <input
          type="text"
          id="imgSrc"
          name="imgSrc"
          className="border-solid border-2 border-gray-400 rounded p-2 mb-2"
        />

        <button
          type="submit"
          href="posts/create"
          className="w-fit px-5 py-3 rounded-xl my-2 bg-[#435ebe] font-bold text-white hover:bg-blue-800"
        >
          Đăng bài viết
        </button>
      </form>
    </div>
  );
}
