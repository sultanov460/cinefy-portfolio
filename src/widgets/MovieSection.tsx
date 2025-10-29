import { Movie } from "@/types/movies";
import { MovieCard } from "./MovieCard";

interface MovieSectionProps {
  movies: Movie[];
}

export const MovieSection = ({ movies }: MovieSectionProps) => {
  return (
    <div className="flex flex-col gap-4 mt-20 mx-5 ">
      <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left tracking-[3px]">
        Trending movies
      </h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
