import { getMovieDetails } from "@/utils/movies";
import { notFound } from "next/navigation";

import { MovieContent } from "../widgets/MovieContent";
interface MovieDetailsProps {
  params: Promise<{ movieId: string }>;
}
const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const { movieId } = await params;
  const movie = await getMovieDetails(movieId);
  console.log(movie);
  if (!movie) {
    return notFound();
  }

  return (
    <>
      <MovieContent movie={movie} />
    </>
  );
};

export default MovieDetails;
