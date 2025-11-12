import { getMovieDetails, getSimilarMovies } from "@/utils/movies";
import { notFound } from "next/navigation";
import { MovieContent } from "../widgets/MovieContent";
import ActorList from "../widgets/ActorList";
import SimilarMovies from "../widgets/SimilarMovies";
interface MovieDetailsProps {
  params: Promise<{ movieId: string }>;
}
const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const { movieId } = await params;
  const movie = await getMovieDetails(movieId);

  if (!movie) {
    return notFound();
  }

  const { cast } = movie.credits;

  const { results: similarMovies } = await getSimilarMovies(movie.id);

  return (
    <>
      <MovieContent movie={movie} />
      <ActorList cast={cast} />
      <SimilarMovies similarMovies={similarMovies} />
    </>
  );
};

export default MovieDetails;
