export default function Dashboard() {
  return (
    <div className="m-4">
      <h1 className="text-2xl">Tạo bài viết mới</h1>
      <form className="flex flex-col">
        <label className="ml-2 font-bold mb-2">Tiêu đề</label>
        <input type="text" className="border-solid border-2 border-gray-400 rounded p-2 mb-2" />
        <label className="ml-2 font-bold mb-2">Nội dung bài viết</label>
        <textarea className="border-solid border-2 border-gray-400 rounded p-2 mb-2" />
        <label className="ml-2 font-bold mb-2">Thêm hình ảnh: </label>

        <button type="submit" href="posts/create" className="w-fit px-5 py-3 rounded-xl my-2 bg-[#435ebe] font-bold text-white hover:bg-blue-800">Đăng bài viết</button>
      </form>
    </div>
  );
}
