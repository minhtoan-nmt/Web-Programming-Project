'use client';

import { PostTable } from "./Table";
import { useState, useEffect } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post/get-all-posts", {
          method: "GET",
          header: "Content-Type: application/json"
        });

        if (!response) {
          throw new Error("Failed to fetch all posts data");
        }

        const responseData = await response.json();
        setPosts(responseData.data);
      } catch (e) {
        console.error("An error occurred while fetching posts: ", e);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="m-4">
      <h1 className="text-2xl mb-6">Quản lý bài viết</h1>
      
      <PostTable items={posts} />
    </div>
  );
}
