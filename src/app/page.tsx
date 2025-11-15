import { generateMeta } from "@/utils/generateMeta";
import { getTrendingMovies } from "@/utils/movies";
import { getTrendingSeries } from "@/utils/series";
import { MovieSection } from "@/widgets/MovieSection";

export async function generateMetadata() {
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
  const { results: trendingMovies } = await getTrendingMovies();
  const { results: trendingSeries } = await getTrendingSeries();
  // TODO:
  // 2: Fix the bug of the actors birthday being null
  // 4:Create a details page for series (Dz)
  // 5:Create a mobile version for the whole website (Dz)
  // 6:Implement searching for movies/series
  // 7:Create a third movie section in the home page
  // 8:Change dynamic folder actorId to personId
  // 9:Deploy the website
  // 10:Fix the bug in slide

  return (
    <>
      <MovieSection movies={trendingMovies} title={"Trending movies"} />
      <MovieSection movies={trendingSeries} title={"Trending series"} />
    </>
  );
};

export default Home;
