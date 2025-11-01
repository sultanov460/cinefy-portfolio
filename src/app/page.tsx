import { getTrendingMovies, getTrendingSeries } from "@/utils/movies";
import { MovieSection } from "@/widgets/MovieSection";

const Home = async () => {
  const trendingMoviesData = getTrendingMovies();
  const trendingSeriesData = getTrendingSeries();

  const [trendingMovies, trendingSeries] = await Promise.all([
    trendingMoviesData,
    trendingSeriesData,
  ]);

  console.log(trendingMovies);

  return (
    <>
      <MovieSection movies={trendingMovies.results} title="Trending movies" />
      <MovieSection movies={trendingSeries.results} title="Trending series" />
    </>
  );
};

export default Home;
