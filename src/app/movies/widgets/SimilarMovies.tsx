import { SimilarMovie } from "@/types/movies";
import { MovieCard } from "@/widgets/MovieCard";

interface SimilarMoviesProps {
  similarMovies: SimilarMovie[];
}

const SimilarMovies = ({ similarMovies }: SimilarMoviesProps) => {
  return (
    <div className="py-20 ">
      <h1 className="text-5xl mb-12 font-bold text-center">Similar Movies</h1>
      <div className="flex flex-wrap justify-center gap-8 items-center">
        {similarMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
