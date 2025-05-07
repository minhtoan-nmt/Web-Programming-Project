export default function CreateComment({ className, postId, changeCommentAddedState }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const textarea = event.currentTarget.querySelector("textarea");
    const comment = textarea ? textarea.value : "";

    if (!comment.trim()) {
      alert("Hãy bình luận gì đó trước khi nhấn nút gửi");
      return;
    }

    try {
      const data = {
        user_id: "CUS0001",
        post_id: postId,
        content: comment,
      }
      console.log(data);

      const response = await fetch("/api/comment/create-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Bình luận thành công!");
        changeCommentAddedState();
        if (textarea) {
          textarea.value = '';
        }
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
    <form className={className} onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-5">Bình luận</h2>
      <textarea className="w-full resize-none border-1 rounded-md p-4" placeholder="Hãy bình luận gì đó...">

      </textarea>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Gửi bình luận
      </button>
    </form>
  );
}