import { getTrendingMovies } from "@/utils/movies";
import { getTrendingSeries } from "@/utils/series";
import { MovieSection } from "@/widgets/MovieSection";

const Home = async () => {
  const { results: trendingMovies } = await getTrendingMovies();
  const { results: trendingSeries } = await getTrendingSeries();

  return (
    <>
      <MovieSection movies={trendingMovies} title={"Trending movies"} />
      <MovieSection movies={trendingSeries} title={"Trending series"} />
    </>
  );
};

export default Home;
