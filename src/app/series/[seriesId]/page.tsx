import { notFound } from "next/navigation";
import { SeriesContent } from "../widgets/SeriesContent";
import {
  getSeriesDetails,
  getSeriesVideo,
  getSimilarSeries,
} from "@/utils/series";
import ActorList from "../widgets/ActorList";

import SimilarSeries from "../widgets/SimilarSeries";
import { Trailer } from "../widgets/Trailer";

interface SeriesDetailsProps {
  params: Promise<{ seriesId: string }>;
}
const SeriesDetails = async ({ params }: SeriesDetailsProps) => {
  const { seriesId } = await params;

  const series = await getSeriesDetails(seriesId);
  const video = await getSeriesVideo(seriesId);

  if (!series) {
    return notFound();
  }

  const { cast } = series.credits;

  const { results: similarSeries } = await getSimilarSeries(series.id);
  console.log(similarSeries);

  return (
    <div>
      <SeriesContent series={series} />
      <ActorList cast={cast} />
      <Trailer results={video.results} />

      <SimilarSeries similarSeries={similarSeries} />
    </div>
  );
};

export default SeriesDetails;
