import { Series } from "@/types/series";
import { SeriesCard } from "@/widgets/SeriesCard";

interface SimilarSeriesProps {
  similarSeries: Series[];
}

const SimilarSeries = ({ similarSeries }: SimilarSeriesProps) => {
  return (
    <div className="py-20 ">
      {similarSeries.length > 0 && (
        <h1 className="text-5xl mb-12 font-bold text-center">Similar Movies</h1>
      )}
      <div className="flex flex-wrap justify-center gap-8 items-center">
        {similarSeries && similarSeries.length > 0 ? (
          similarSeries.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))
        ) : (
          <div className="my-20 text-center text-gray-400 text-4xl">
            No Similar Series Available.
          </div>
        )}
      </div>
    </div>
  );
};

export default SimilarSeries;
