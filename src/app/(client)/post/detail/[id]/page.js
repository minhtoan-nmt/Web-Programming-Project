'use client'

import { useState, useEffect } from "react"
import React from "react"
import CreateComment from "./CreateComment"
import CommentSection from "./ComnentSection";
import Image from "next/image";

export default function Page({ params }) {
  const resolveParams = React.use(params);
  const id = resolveParams.id;
  const [postId, setPostId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState([]);
  const [postImgSrc, setPostImgSrc] = useState("");
  const [comments, setComments] = useState([]);
  const [newCommentAdded, setNewCommentAdded] = useState(false); // Add this state
  
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
      const post = responseData.data;

      
      setPostId(post.id);
      setPostTitle(post.title);
      setPostContent(post.content.split("\n"));
      let img_src = post.content_img_src;
      if (img_src.substring(0, 4) != "http") {
        img_src = "/image/post/content/" + img_src;
      }
      setPostImgSrc(img_src);
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
    }

    fetchCommentsFromPost();
  }, [postId, newCommentAdded]);

  // console.log(postId)
  
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
          <div className="flex flex-col font-semibold whitespace-pre-line">
            {postContent.map((item, index) => {
              return (
                <p key={index} className="mb-6">
                  {item}
                </p>
              );
            })}
            {postImgSrc && (
              <Image
                src={postImgSrc}
                alt="Post thumbnail"
                width={0}
                height={0}
                sizes="33vw"
                style={{ width: "50%", height: "auto" }}
                className="self-center"
              />
            )}
          </div>
        </div>
      </div>

      <CreateComment className="mx-[14%] mb-12" postId={postId} changeCommentAddedState={() => setNewCommentAdded(prev => !prev)} />
      <CommentSection className="mx-[14%] mb-12" comments={comments} />
    </div>
  );
}