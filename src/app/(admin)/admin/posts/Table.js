import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";

export function PostTable({ items }) {
  const truncateContent = (content, maxLength=100) => {
    if (!content) return "";
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  }

  const handleDelete = async (postId) => {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa bài viết này không?");
    if (confirmDelete) {
      try {
        const response = await fetch("/api/post/delete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: postId })
        });

        if (response.ok) {
          alert(`Xóa bài viết ${postId} thành công!`);
          window.location.reload();
        } else {
          const errorData = await response.json();
          alert(`Có lỗi xảy ra khi xóa bài viết: ${errorData.error || "Failed to delete"}`);
        }
      } catch (e) {
        alert(`Error: ${e.message || "An error occurred"}`);
        console.error("Error while deleting post: ", e);
      }
    }
  }

  return (  
    <div className="bg-white rounded-lg p-3">
      <div className="flex justify-between items-center">
        <h1 className="p-4 text-2xl font-bold text-gray-500">
          Danh sách bài viết
        </h1>
        <a href="posts/create" className="px-5 py-3 rounded-xl my-2 bg-[#435ebe] text-white hover:bg-blue-800">Tạo bài viết mới</a>
      </div>
      <table className="m-2">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="p-3">ID</th>
            <th className="p-3">Tiêu đề</th>
            <th className="p-3">Đánh giá</th>
            <th className="p-3">Nội dung</th>
            <th className="p-3">Link hình ảnh</th>
            <th className="p-3">Ngày đăng</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {items.map((item, index) => {
            return (
              <tr key={index} className="border-b-2 border-gray-300">
                <td className="p-3">{item["id"]}</td>
                <td className="p-3">{item["title"]}</td>
                <td className="p-3">{item["star_rate"]}</td>
                <td className="p-3">{truncateContent(item["content"])}</td>
                <td className="p-3">{item["img_src"]}</td>
                <td className="p-3">{item["date_posted"]}</td>
                <td>
                  <Link href={`/admin/posts/update/${item["id"]}`}>
                    <button
                      type="button"
                      className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125"
                    >
                      <FaPen />
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125"
                    onClick={() => handleDelete(item["id"])}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
