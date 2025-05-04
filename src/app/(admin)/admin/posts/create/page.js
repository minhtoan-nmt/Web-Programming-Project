'use client';

export default function Page() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const titleInput = event.currentTarget.querySelector("#title");
    const contentTextarea = event.currentTarget.querySelector("#content");

    const title = titleInput ? titleInput.value : "";
    const content = contentTextarea ? contentTextarea.value : "";

    if (!title.trim()) {
      alert("Hãy nhập tiêu đề bài viết trước khi đăng bài");
      return;
    } else if (!content.trim()) {
      alert("Hãy nhập nội dung bài viết trước khi đăng bài");
      return;
    }
    

    try {
      const data = {
        title: title,
        content: content
      }
      console.log(data);

      const response = await fetch("/api/post/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Tạo bài viết mới thành công!");
        titleInput.value = '';
        contentTextarea.value = '';
        // You might want to refresh the comments section here.
      } else {
        const errorData = await response.json();
        alert(`Lỗi: ${errorData.message || 'Không thể gửi bình luận'}`);
      }
    } catch (e) {
      alert(`Lỗi: ${e.message || "Đã có lỗi xảy ra"}`);
      console.error("Error submitting comment:", e)
    }
  };

  return (
    <div className="m-4">
      <h1 className="text-2xl mb-6">Tạo bài viết mới</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="ml-2 font-bold mb-2">Tiêu đề</label>
        <input type="text" id="title" name="title" className="border-solid border-2 border-gray-400 rounded p-2 mb-2" />
        <label className="ml-2 font-bold mb-2">Nội dung bài viết</label>
        <textarea id="content" name="content" className="border-solid border-2 border-gray-400 rounded p-2 mb-2" />
        <label className="ml-2 font-bold mb-2">Thêm hình ảnh: </label>

        <button type="submit" href="posts/create" className="w-fit px-5 py-3 rounded-xl my-2 bg-[#435ebe] font-bold text-white hover:bg-blue-800">Đăng bài viết</button>
      </form>
    </div>
  );
}
