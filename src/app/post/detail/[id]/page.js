import { useState, useEffect } from "react"

export default function Page({ params }) {
  const { id } = params;
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/post/get-post?n=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response) {
        throw new Error("Failed to fetch posts data");
      }

      const responseData = await response.json();
      const post = responseData.data.data.content;
      console.log(post);

      setPost(post);
    }

    fetchData();
  }, []);
  
  return (
    <div className="flex flex-col max-sm:p-6 max-md:p-12 p-24">
      <span className="text-sm text-gray-500">
        Trang chủ / Bài viết / Bài viết chi tiết
      </span>
      <div className="flex flex-col text-justify m-6">
        <h1 className="text-center font-bold text-2xl text-green-700 mb-12">
          Thảo luận về vai trò của công nghệ đối với đời sống con người hay nhất
        </h1>
        <div className="font-bold">
          {pageContent.map((item, index) => {
            if (item.type === 'p') {
              return (
                <p key={index} style={{ whiteSpace: 'pre-line' }} className="mb-6">
                  {item.content}
                </p>
              );
            } else if (item.type === 'img') {
              return (
                <img
                  key={index}
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  className="mx-auto mb-6"
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}