import { getTrendingMovies } from "@/utils/movies";
import { getTrendingSeries } from "@/utils/series";
import { MovieSection } from "@/widgets/MovieSection";

const Home = async () => {
  const { results: trendingMovies } = await getTrendingMovies();
  const { results: trendingSeries } = await getTrendingSeries();
  // TODO:
  // 1:WRIGHT FULL SEO
  // 2:Create a details page for actors (Dz)
  // 3:Display trailers for movies/series in their details page
  // 4:Create a details page for series (Dz)
  // 5:Create a mobile version for the whole website (Dz)
  // 6:Implement searching for movies/series
  // 7:Create a third movie section in the home page
  // 8:Create a favicon for the website (generate in Canva) (Dz)

  return (
    <>
      <MovieSection movies={trendingMovies} title={"Trending movies"} />
      <MovieSection movies={trendingSeries} title={"Trending series"} />
    </>
  );
};

export default Home;
