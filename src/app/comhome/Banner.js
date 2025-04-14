import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-110 bg-black">
      <Image
       src="/image/hom/banner/a1.webp" 
        alt="Banner"
        fill 
        className="object-cover rounded-lg"
      />
    </div>
  );
};

export default Banner;
