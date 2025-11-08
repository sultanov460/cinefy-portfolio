import { getMovieDetails } from "@/utils/movies";
import { notFound } from "next/navigation";
import React from "react";
import { SeriesContent } from "../widgets/SeriesContent";

interface SeriesDetailsProps {
  params: Promise<{ seriesId: string }>;
}
const SeriesDetails = async ({ params }: SeriesDetailsProps) => {
  const { seriesId } = await params;
  const series = await getMovieDetails(seriesId);
  console.log(series);
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
