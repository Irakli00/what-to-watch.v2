import { getTrendingAnimes } from "./services/aniList";
import { getTrendingMovies } from "./services/tmdb";
import TrendingHeader from "./_components/TrendingHeader";
import Carousel from "./_components/Carousel";
import CustomLink from "./_components/CustomLink";

async function Page() {
  const preferedMedia = "anime";
  const lookUp = {
    anime: getTrendingAnimes,
    movie: getTrendingMovies,
    // 'tv': getTrendingTvs
  };

  const data = await lookUp[preferedMedia]();
  return (
    <>
      <section className="bg-light-blue p-2">
        <div className="m-auto container overflow-x-clip">
          <TrendingHeader></TrendingHeader>
          <Carousel data={data}></Carousel>
        </div>
      </section>

      <section className="cusom-container mt-8 text-center text-dark-blue">
        <h1 className="text-6xl font-bold">
          Can&apos;t decide what to watch tonight?
        </h1>

        <p className="text-2xl mt-4.5">
          Answer a few quick questions and get personalized recommendations for
          movies, anime, TV shows, and more tailored just for you.
        </p>

        <div className="flex justify-center items-center gap-28">
          <CustomLink to="/movie/select" type="movie">
            Choose a Movie
          </CustomLink>
          <CustomLink to="/anime/select" type="anime">
            Choose an Anime
          </CustomLink>
        </div>
      </section>
    </>
  );
}
export default Page;
