import Image from "next/image"

function PageItem({ postTitle, imgSrc }) {
  return (
    <div className="flex flex-col w-fit bg-white p-4">
      <Image
        src={imgSrc}
        alt="Post thumbnail"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <p className="font-bold">{postTitle}</p>
      <a href="#" className="text-red-400">Xem thêm</a>
    </div>
  );
}

export default PageItem;