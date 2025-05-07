export default function Comment ({username, content, like_count, date_posted}) {
  return (
    <div>
      <p>
        <span className="font-bold mr-2">
          {username}
        </span>
        {content}
      </p>
    </div>
  );
}