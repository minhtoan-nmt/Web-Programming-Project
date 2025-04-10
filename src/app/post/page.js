'use client'

import { useState, useEffect } from "react"
import PageItem from "../component/post-item"

export default function Home() {
  const [mainPostList, setMainPostList] = useState([]);
  const [relatedPostList, setRelatedPostList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const mainResponse = await fetch("http://localhost/api/get-posts");

        if (!mainResponse) {
          throw new Error("Failed to fetch posts data");
        }

        const data = await mainResponse.json();

        setMainPostList(data["main_post_list"]);
        setRelatedPostList(data["related_post_list"]);
        console.log(mainPostList);
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
              postTitle={item.post_title}
              imgSrc={item.imgSrc}
              redirect="/post/detail"
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
                postTitle={item.postTitle}
                imgSrc={item.imgSrc}
                redirect={item.redirect}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}