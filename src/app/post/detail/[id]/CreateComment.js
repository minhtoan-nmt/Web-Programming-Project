export default function CreateComment({ className }) {
  return (
    <form className={className}>
      <h2 className="text-2xl font-bold mb-5">Bình luận</h2>
      <textarea className="w-full resize-none border-1 rounded-md p-4" placeholder="Hãy bình luận gì đó...">

      </textarea>
    </form>
  );
}