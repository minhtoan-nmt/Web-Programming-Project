import PageItem from "../component/post-item"

export default function Home() {
  const mainPostList = [
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item1.jpg",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item2.webp",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item1.jpg",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item1.jpg",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item2.webp",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item1.jpg",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item1.jpg",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item2.webp",
      redirect: "/post/detail"
    },
  ];
  const relatedPostList = [
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item1.jpg",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item2.webp",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item1.jpg",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item1.jpg",
      redirect: "/post/detail"
    },
    {
      postTitle: "Playstation 5 Black and White version of the PS5 coming out on sale.",
      imgSrc: "/image/post/ps5-item2.webp",
      redirect: "/post/detail"
    },
  ];

  return (
    <div className="flex flex-col justify-center p-24">
      {/* Các post chính */}
      <div className="grid grid-cols-4 gap-6 w-fit bg-gray-200 mx-8 mt-8 mb-36 p-6">
        {mainPostList.map((item, index) => {
          return (
            <PageItem key={index}
              postTitle={item.postTitle}
              imgSrc={item.imgSrc}
              redirect={item.redirect}
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
        <div className="grid grid-cols-5 gap-2 w-full">
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