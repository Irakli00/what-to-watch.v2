import { getTrendingAnimes } from "./services/aniList";
import { getTrendingMovies } from "./services/tmdb";
import TrendingHeader from "./_components/TrendingHeader";
import Carousel from "./_components/Carousel";

async function Page() {
  const preferedMedia = "anime";
  const lookUp = {
    anime: getTrendingAnimes,
    movie: getTrendingMovies,
    // 'tv': getTrendingTvs
  };

  const data = await lookUp[preferedMedia]();
  return (
    <section className="bg-light-blue p-2">
      <div className="m-auto container overflow-x-clip">
        <TrendingHeader></TrendingHeader>
        <Carousel data={data}></Carousel>
      </div>
    </section>
  );
}
export default Page;
