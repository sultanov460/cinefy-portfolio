import { SimilarMovie } from "@/types/movies";
import { MovieCard } from "@/widgets/MovieCard";

interface SimilarMoviesProps {
  similarMovies: SimilarMovie[];
}

const SimilarMovies = ({ similarMovies }: SimilarMoviesProps) => {
  return (
    <div className="py-20 ">
      {similarMovies.length > 0 && (
        <h1 className="text-5xl mb-12 font-bold text-center">Similar Movies</h1>
      )}

      <div className="flex flex-wrap justify-center gap-8 items-center">
        {similarMovies && similarMovies.length > 0 ? (
          similarMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div className="my-20 text-center text-gray-400 text-4xl">
            No Similar Movies Available.
          </div>
        )}
      </div>
    </div>
  );
};

export default SimilarMovies;
