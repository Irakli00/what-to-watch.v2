import Image from "next/image";

function TrendingHeader() {
  const preferedMedia = "anime";
  return (
    <div className="flex gap-1.5 items-center">
      <Image
        src={"/trendingArrow.png"}
        alt="trending arrow"
        height={25}
        width={25}
      ></Image>
      <h1 className="text-2xl">{`Trending |${preferedMedia}| right now:`}</h1>
    </div>
  );
}

export default TrendingHeader;
