import {
  getMovieDetails,
  getMovieVideo,
  getSimilarMovies,
} from "@/utils/movies";
import { notFound } from "next/navigation";
import { MovieContent } from "../widgets/MovieContent";
import ActorList from "../widgets/ActorList";
import SimilarMovies from "../widgets/SimilarMovies";
import { Trailer } from "../widgets/Trailer";

export async function generateMetadata({ params }: MovieDetailsProps) {
  const { movieId } = await params;
  const movie = await getMovieDetails(movieId);

  return {
    title: movie.title,
    description: movie.overview,
  };
}

interface MovieDetailsProps {
  params: Promise<{ movieId: string }>;
}

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const { movieId } = await params;
  const movie = await getMovieDetails(movieId);
  const video = await getMovieVideo(movieId);

  if (!movie) {
    return notFound();
  }

  const { cast } = movie.credits;

  const { results: similarMovies } = await getSimilarMovies(movie.id);

  return (
    <>
      <MovieContent movie={movie} />
      <ActorList cast={cast} />
      <Trailer {...video} />
      <SimilarMovies similarMovies={similarMovies} />
    </>
  );
};

export default MovieDetails;
