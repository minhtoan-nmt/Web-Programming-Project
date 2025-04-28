'use client'

import { useState, useEffect } from "react"
import React from "react"
import CreateComment from "./CreateComment";
import CommentSection from "./ComnentSection";

export default function Page({ params }) {
  const resolveParams = React.use(params);
  const id = resolveParams.id;
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/post/get-post?id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      if (!response) {
        throw new Error("Failed to fetch posts data");
      }
      
      const responseData = await response.json();
      const post = responseData.data[0];
      
      setPostTitle(post.title);
      setPostContent(JSON.parse(post.content));
      console.log(postTitle);
      console.log(JSON.parse(post.content));
    }
    
    fetchData();
  }, []);

  const comments = [
    { id: 1, user_id: 1, username: "Toan", content: "Quá hay! Cảm ơn bạn đã chia sẻ", date_created: new Date(), like_count: 7 },
    { id: 2, user_id: 2, username: "Lan", content: "Bài viết rất hữu ích!", date_created: new Date(new Date().setDate(new Date().getDate() - 1)), like_count: 3 },
    { id: 3, user_id: 3, username: "Hung", content: "Mình đã áp dụng và thành công, cảm ơn!", date_created: new Date(new Date().setHours(new Date().getHours() - 12)), like_count: 12 },
    { id: 4, user_id: 1, username: "Toan", content: "Cho mình hỏi thêm về phần này được không?", date_created: new Date(new Date().setMinutes(new Date().getMinutes() - 30)), like_count: 2 },
    { id: 5, user_id: 4, username: "Mai", content: "Cảm ơn bạn nhiều!", date_created: new Date(), like_count: 5 }
  ];
  
  return (
    <div className="flex flex-col max-sm:p-6 max-md:p-12 p-24">
      <div className="mb-12">
        <span className="text-sm text-gray-500">
          Trang chủ / Bài viết / Bài viết chi tiết
        </span>
        <div className="flex flex-col text-justify m-6">
          <h1 className="text-center font-bold text-2xl text-green-700 mb-12">
            {postTitle}
          </h1>
          <div className="font-bold">
            {postContent.map((item, index) => {
              if (item.type === "p") {
                return (
                  <p key={index} style={{ whiteSpace: 'pre-line' }}>
                    {item.content}
                  </p>
                );
              } else if (item.type === "img") {
                return (
                  <img
                    key={index}
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    className="mx-auto mb-6"
                  />
                );
              } else {
                return (
                  <div key={index}>
                    <p>Not found this element type</p>
                    <br></br>
                    <p>{item.content}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <CreateComment className="mx-[14%] mb-12" />
      <CommentSection className="mx-[14%] mb-12" comments={comments} />
    </div>
  );
}