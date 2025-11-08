import { Container } from "@/app/components/Container";
import { MovieDetails } from "@/types/movies";
import Link from "next/link";
import { BsFillStarFill } from "react-icons/bs";

interface MovieContentProps {
  movie: MovieDetails;
}

export const MovieContent = ({ movie }: MovieContentProps) => {
  return (
    <Container className="flex flex-col items-center justify-center gap-10 mb-20">
      <div className="flex gap-12 items-center">
        <img
          src={"https://www.themoviedb.org/t/p/w300" + movie.poster_path}
          alt={movie.title}
          className="rounded-3xl border"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <div className="flex gap-5 text-[#ccc]">
            <p className="flex items-center gap-1">
              {" "}
              <BsFillStarFill size={15} />
              {movie.vote_average.toFixed(1)}
            </p>
            <p>{movie.runtime}m</p>
            <p>{movie.release_date}</p>
          </div>
          <div className="flex gap-5 text-[#ccc]">
            {movie.genres.map((genre) => (
              <Link key={genre.id} href={`/genre/${genre.id} `}>
                {genre.name}
              </Link>
            ))}
          </div>
          {movie.tagline && (
            <div className="flex flex-col gap-2">
              <span className="text-[#ccc]">Tagline:</span>
              <span className="text-lg font-medium">{movie.tagline}</span>
            </div>
          )}
          {movie.status && (
            <div>
              <span className="text-[#ccc]">Status: </span>
              {movie.status}
            </div>
          )}
        </div>
      </div>
      {movie.overview && (
        <p className="text-center text-xl font-medium">{movie.overview}</p>
      )}
      <div className="mt-20 text-4xl font-bold">
        <h1 className="text-center">Actors</h1>
        <div className="flex gap-3 flex-wrap items-center justify-center">
          {movie.credits.cast.map((author) => (
            <div key={author.id} className="mt-10">
              <img
                src={
                  "https://www.themoviedb.org/t/p/w300" + author.profile_path
                }
                alt={author.name}
                className="rounded-xl w-25"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
