import { generateMeta } from "@/utils/generateMeta";
import {getTrendingMovies, getUpcomingMovies} from "@/utils/movies";
import { getTrendingSeries } from "@/utils/series";
import { MovieSection } from "@/widgets/MovieSection";
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const metaObj = {
    name: "Cinefy",
    description: "Cinefy description",
    url: baseUrl,
    image:
      "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/08/breaking-bad-walter-white-2008-2013.jpg?w=1600&h=900&fit=crop",
    imageAltText: "Cinefy Home Page",
  };

  return generateMeta(metaObj);
}

const Home = async () => {
const trendingMoviesData = getTrendingMovies();
const trendingSeriesData = getTrendingSeries();
const upcomingMoviesData = getUpcomingMovies();

const [trendingMovies, trendingSeries, upcomingMovies] = await Promise.all([trendingMoviesData, trendingSeriesData, upcomingMoviesData])

  // TODO:
  // 1:Create a mobile version for the whole website (Dz)
  // 2:Implement searching for movies/series
  // 3:Fix the bug in slide
  // 4: Create a hero section in home page

  return (
    <>
      <MovieSection movies={trendingMovies.results} title={"Trending movies"} />
      <MovieSection movies={trendingSeries.results} title={"Trending series"} />
      <MovieSection movies={upcomingMovies.results} title={"Upcoming movies"} />
    </>
  );
};

export default Home;
