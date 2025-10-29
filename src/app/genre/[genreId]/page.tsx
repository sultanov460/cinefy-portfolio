import { getMovieByGenre } from "@/utils/movies";
import { Movie } from "@/types/movies";
import { MovieCard } from "@/widgets/MovieCard";

interface MovieFoundByGenreProps {
  params: Promise<{ genreId: string }>;
}

const MovieFoundByGenre = async ({ params }: MovieFoundByGenreProps) => {
  const { genreId } = await params;
  const { results: movies } = await getMovieByGenre(genreId);

  return (
    <div>
      <h1 className="text-center text-4xl lg:text-5xl font-semibold tracking-[3px] mb-10">
        Genre <span className=" text-primary">results</span>
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieFoundByGenre;
