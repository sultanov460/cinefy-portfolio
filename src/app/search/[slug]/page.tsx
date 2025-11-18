import { Movie } from "@/types/movies";
import { Series } from "@/types/series";
import { multiSearch } from "@/utils/multi-search";
import { MovieCard } from "@/widgets/MovieCard";
import { SeriesCard } from "@/widgets/SeriesCard";

interface SearchPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SearchPage = async ({ params }: SearchPageProps) => {
  const { slug } = await params;

  const results = await multiSearch(slug);

  return (
    <div>
      <h1 className="text-center text-5xl mt-10 font-semibold tracking-[1px]">
        Search results for{" "}
        <span className="text-primary">{`"${decodeURIComponent(slug)}"`}</span>
      </h1>

      {results?.length === 0 && (
        <p className="text-5xl font-medium text-center mt-40">
          No results <span className="text-primary">found</span>
        </p>
      )}

      <div
        className="flex flex-wrap gap-5 justify-center items-center mt-20
      "
      >
        {results.map((item: Movie | Series) =>
          item.media_type === "movie" ? (
            <MovieCard key={item.id} movie={item} />
          ) : (
            <SeriesCard key={item.id} series={item} />
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
