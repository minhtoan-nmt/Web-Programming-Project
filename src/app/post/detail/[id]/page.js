'use client'

import { useState, useEffect } from "react"
import React from "react"
import CreateComment from "./CreateComment";
import CommentSection from "./ComnentSection";
import Image from "next/image";

export default function Page({ params }) {
  const resolveParams = React.use(params);
  const id = resolveParams.id;
  const [postId, setPostId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState([]);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    const fetchPostData = async () => {
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
      
      setPostId(post.id);
      setPostTitle(post.title);
      setPostContent(JSON.parse(post.content));
      console.log(postTitle);
      console.log(JSON.parse(post.content));
    }
    
    fetchPostData();
  }, []);

  useEffect(() => {
    const fetchCommentsFromPost = async () => {
      const response = await fetch(`/api/comment/get-comment-from-post?query=${postId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response) {
        throw new Error("Failed to fetch posts data");
      }

      const responseData = await response.json();

      setComments(responseData.data);
      console.log(comments);
    }

    fetchCommentsFromPost();
  }, [postId]);
  
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