import { getMovieByGenre } from "@/utils/movies";

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
    </div>
  );
};

export default MovieFoundByGenre;
