import { getTrendingMovies } from "@/utils/movies";
import { MovieSection } from "@/widgets/MovieSection";

const Home = async () => {
  const { results: trendingMovies } = await getTrendingMovies();

  console.log(trendingMovies);

  return (
    <>
      <MovieSection movies={trendingMovies} />
    </>
  );
};

export default Home;
