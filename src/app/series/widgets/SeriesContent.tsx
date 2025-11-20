import { Container } from "@/components/Container";
import { SeriesDetails } from "@/types/series";
import Link from "next/link";
import { BsFillStarFill } from "react-icons/bs";

interface SeriesContentProps {
  series: SeriesDetails;
}
export const SeriesContent = ({ series }: SeriesContentProps) => {
  return (
    <Container className="flex flex-col items-center justify-center gap-10 mb-20">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <img
          src={"https://www.themoviedb.org/t/p/w300" + series.poster_path}
          alt={series.name}
          className="rounded-3xl border"
        />
        <div className="flex flex-col gap-5 items-center justify-center text-center xl:justify-baseline xl:text-left xl:items-baseline">
          <h1 className="text-4xl font-bold">{series.name}</h1>
          <div className="flex gap-5 text-[#ccc]">
            <p className="flex items-center gap-1">
              {" "}
              <BsFillStarFill size={15} />
              {series.vote_average.toFixed(1)}
            </p>
            <p>
              {series.number_of_seasons}
              {series.number_of_seasons > 1 ? " seasons" : " season"}
            </p>
            <p>{series.first_air_date}</p>
          </div>
          <div className="flex gap-5 text-[#ccc]">
            {series.genres.map((genre) => (
              <Link
                className="xl:hover:text-primary xl:hover:underline font-medium"
                key={genre.id}
                href={`/genre/${genre.id} `}
              >
                {genre.name}
              </Link>
            ))}
          </div>
          {series.tagline && (
            <div className="flex flex-col gap-2">
              <span className="text-[#ccc]">Tagline:</span>
              <span className="text-lg font-medium">{series.tagline}</span>
            </div>
          )}
          {series.status && (
            <div>
              <span className="text-[#ccc]">Status: </span>
              <span className="text-lg font-medium">{series.status}</span>
            </div>
          )}
        </div>
      </div>
      {series.overview && (
        <p className="text-center text-xl font-medium px-5">
          {series.overview}
        </p>
      )}
    </Container>
  );
};
