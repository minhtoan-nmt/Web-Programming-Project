import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";

export function UserTable({ items }) {
  const handleDelete = async (userId) => {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa bài viết này không?");
    if (confirmDelete) {
      try {
        const response = await fetch("/api/user/delete-user", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: userId })
        });

        if (response.ok) {
          alert(`Xóa người dùng ${userId} thành công!`);
          window.location.reload();
        } else {
          const errorData = await response.json();
          alert(`Có lỗi xảy ra khi xóa người dùng: ${errorData.error || "Failed to delete"}`);
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
          Danh sách người dùng
        </h1>
        <a href="posts/create" className="px-5 py-3 rounded-xl my-2 bg-[#435ebe] text-white hover:bg-blue-800">Tạo thông tin người dùng mới</a>
      </div>
      <table className="m-2">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="p-3">ID</th>
            <th className="p-3">Tên tài khoản</th>
            <th className="p-3">Tên</th>
            <th className="p-3">Họ và tên đệm</th>
            <th className="p-3">CCCD</th>
            <th className="p-3">SĐT</th>
            <th className="p-3">Địa chỉ</th>
            <th className="p-3">Ngày sinh</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {items.map((item, index) => {
            return (
              <tr key={index} className="border-b-2 border-gray-300">
                <td className="p-3">{item["id"]}</td>
                <td className="p-3">{item["username"]}</td>
                <td className="p-3">{item["first_name"]}</td>
                <td className="p-3">{item["last_name"]}</td>
                <td className="p-3">{item["citizen_id"]}</td>
                <td className="p-3">{item["phone_num"]}</td>
                <td className="p-3">{item["address"]}</td>
                <td className="p-3">{item["birth_date"]}</td>
                <td>
                  <Link href={`/admin/user/update/${item["id"]}`}>
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
