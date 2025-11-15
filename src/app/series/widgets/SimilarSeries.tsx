import { Series } from "@/types/series";
import { SeriesCard } from "@/widgets/SeriesCard";

interface SimilarSeriesProps {
  similarSeries: Series[];
}

const SimilarSeries = ({ similarSeries }: SimilarSeriesProps) => {
  return (
    <div className="py-20 ">
      <h1 className="text-5xl mb-12 font-bold text-center">Similar Series</h1>
      <div className="flex flex-wrap justify-center gap-8 items-center">
        {similarSeries.slice(0, 12).map((series) => (
          <SeriesCard key={series.id} series={series} />
        ))}
      </div>
    </div>
  );
};

export default SimilarSeries;
