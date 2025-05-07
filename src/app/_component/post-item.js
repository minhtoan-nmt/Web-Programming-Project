import Image from "next/image"
import Link from "next/link";

function PageItem({ postTitle, imgSrc, redirect="#" }) {
  if (!imgSrc) {
    imgSrc = "https://i.postimg.cc/TYm6zdYY/no-picture.webp";
  }
  const srcHead = imgSrc.substring(0, 4);
  // local image
  if (srcHead != "http") {
    console.log(imgSrc);
  }

  return (
    <div className="flex flex-col justify-between w-fit bg-white p-4">
      <Image
        src={imgSrc}
        alt="Post thumbnail"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="flex flex-col justify-end">
        <p className="font-bold">{postTitle}</p>
        <Link href={redirect} className="text-red-400">
          Xem thêm
        </Link>
      </div>
    </div>
  );
}

export default PageItem;