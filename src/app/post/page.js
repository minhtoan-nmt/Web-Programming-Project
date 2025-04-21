'use client'

import { useState, useEffect } from "react"
import PageItem from "../component/post-item"

export default function Home() {
  const [mainPostList, setMainPostList] = useState([]);
  const [relatedPostList, setRelatedPostList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/post/get-home-posts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        if (!response) {
          throw new Error("Failed to fetch posts data");
        }

        const responseData = await response.json();
        const posts = responseData.data;
        console.log(posts);

        setMainPostList(posts.main_posts);
        setRelatedPostList(posts.related_posts);
      } catch (e) {
        console.error("An error occurred while fetching: ", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center sm:p-6 md:p-12 lg:p-24">
      {/* Các post chính */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-fit bg-(--tertiary) mx-8 mt-8 mb-36 p-6">
        {mainPostList.map((item, index) => {
          return (
            <PageItem key={index}
              postTitle={item.title}
              imgSrc={`/image/post/${item.img_name}`}
              redirect={`post/detail/${item.id}`}
            />
          );
        })}
      </div>

      {/* Bài viết liên quan */}
      <div className="w-fit mb-8">
        <h2 className="text-red-400 font-bold text-2xl mb-12">
          <span className="bg-red-400 rounded-md px-3 py-3 mr-6" />
          Bài viết liên quan
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-(--tertiary) w-full p-6">
          {relatedPostList.map((item, index) => {
            return (
              <PageItem key={index}
                postTitle={item.title}
                imgSrc={`/image/post/${item.img_name}`}
                redirect={`post/detail/${item.id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}