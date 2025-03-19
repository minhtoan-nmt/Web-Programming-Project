import PageItem from "../component/post-item"

export default function Home() {
  return (
    // Chèn header
    <div className="flex flex-col justify-center">
      {/* Khi nào có header thì xóa cái này */}
      <div className="flex justify-center items-center w-full h-48 bg-gray-100 border-b border-gray-300">
        <h1 className="text-3xl font-bold">Header</h1>
      </div>
      {/* Các post chính */}
      <div className="grid grid-cols-4 gap-6 w-fit bg-gray-200 mx-32 mt-32 mb-24 p-6">
        <PageItem
          postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
          imgSrc="/image/post/ps5-item1.jpg"
          redirect="/post/detail"
        />
        <PageItem
          postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
          imgSrc="/image/post/ps5-item2.webp"
          redirect="/post/detail"
        />
        <PageItem
          postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
          imgSrc="/image/post/ps5-item1.jpg"
          redirect="/post/detail"
        />
        <PageItem
          postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
          imgSrc="/image/post/ps5-item1.jpg"
          redirect="/post/detail"
        />
        <PageItem
          postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
          imgSrc="/image/post/ps5-item2.webp"
          redirect="/post/detail"
        />
        <PageItem
          postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
          imgSrc="/image/post/ps5-item1.jpg"
          redirect="/post/detail"
        />
        <PageItem
          postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
          imgSrc="/image/post/ps5-item1.jpg"
          redirect="/post/detail"
        />
        <PageItem
          postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
          imgSrc="/image/post/ps5-item2.webp"
          redirect="/post/detail"
        />
      </div>

      {/* Bài viết liên quan */}
      <div className="w-fit mx-24 mb-24">
        <h2 className="text-red-400 font-bold text-2xl mb-12">
          <span className="bg-red-400 rounded-md px-3 py-3 mr-6" />
          Bài viết liên quan
        </h2>
        <div className="grid grid-cols-5 gap-2 w-full">
          <PageItem
            postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
            imgSrc="/image/post/ps5-item1.jpg"
            redirect="/post/detail"
          />
          <PageItem
            postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
            imgSrc="/image/post/ps5-item2.webp"
            redirect="/post/detail"
          />
          <PageItem
            postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
            imgSrc="/image/post/ps5-item1.jpg"
            redirect="/post/detail"
          />
          <PageItem
            postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
            imgSrc="/image/post/ps5-item1.jpg"
            redirect="/post/detail"
          />
          <PageItem
            postTitle="Playstation 5 Black and White version of the PS5 coming out on sale."
            imgSrc="/image/post/ps5-item2.webp"
            redirect="/post/detail"
          />
        </div>
      </div>

      {/* Khi nào có footer thì xóa cái này */}
      <div className="flex justify-center items-center w-full h-48 bg-black border-t border-gray-300">
        <h1 className="text-white text-3xl font-bold">Footer</h1>
      </div>
    </div>
  );
}