import { getMovieByGenre, getMovieGenres } from "@/utils/movies";
import { Movie } from "@/types/movies";
import { MovieCard } from "@/widgets/MovieCard";
import { Genre } from "@/types/types";
import { Metadata } from "next";

interface MovieFoundByGenreProps {
  params: Promise<{ genreId: string }>;
}

export async function generateMetadata({
  params,
}: MovieFoundByGenreProps): Promise<Metadata> {
  const { genreId } = await params;
  const { genres } = await getMovieGenres();

  const currentGenre = genres.find(
    (genre: Genre) => genre.id === Number(genreId)
  );

  return {
    title: currentGenre.name,
    description:
      "Step into the future with Cinefy’s Science Fiction collection — where imagination knows no bounds. From intergalactic adventures and futuristic dystopias to mind-bending explorations of technology and time, these films push the limits of what’s possible. Discover iconic classics that shaped the genre alongside groundbreaking new releases that challenge reality itself. Whether you’re fascinated by alien worlds, artificial intelligence, or the mysteries of space, our Sci-Fi selection will transport you far beyond the ordinary.",
  };
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
