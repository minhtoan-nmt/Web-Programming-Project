import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[28rem] xl:h-[32rem] bg-black rounded-lg overflow-hidden">
     <Image
  src="/image/hom/banner/home.jpg"
  alt="Banner"
  fill
  className="object-cover"
  sizes="100vw" 
  priority
/>
    </div>
  );
};

export default Banner;
