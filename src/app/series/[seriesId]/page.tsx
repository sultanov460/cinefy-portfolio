import { getMovieDetails } from "@/utils/movies";
import { notFound } from "next/navigation";
import { SeriesContent } from "../widgets/SeriesContent";
import { getSeriesDetails } from "@/utils/series";

interface SeriesDetailsProps {
  params: Promise<{ seriesId: string }>;
}
const SeriesDetails = async ({ params }: SeriesDetailsProps) => {
  const { seriesId } = await params;
  console.log("seriesId", seriesId);
  const series = await getSeriesDetails(seriesId);
  console.log("series", series);
  if (!series) {
    return notFound();
  }

  return (
    <div>
      <SeriesContent series={series} />
    </div>
  );
};

export default SeriesDetails;
