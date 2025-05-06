import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden rounded-lg bg-gray-100">
      <Image
        src="/image/hom/banner/home.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default Banner;
