import Comment from "./Comment";

export default function CommentSection({ className, comments }) {
  let commentsToRender;
  if (comments && comments.length > 0) {
    commentsToRender = (
      comments.map((item, index) => (
        <Comment
          key={index}
          username={item.user_id}
          content={item.content}
          like_count={item.like_count}
        />
      ))
    );
  } else {
    commentsToRender =  (
      <p className="ml-4 text-gray-600">Chưa có bình luận nào</p>
    );
  }

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-5">Bình luận mới nhất</h2>
      <div className="h-0.5 bg-gray-200 w-full mb-4"></div>
      {commentsToRender}
    </div>
  );
}