import { Container } from "@/app/components/Container";
import { MovieDetails } from "@/types/movies";
import Link from "next/link";

interface MovieContentProps {
  movie: MovieDetails;
}

export const MovieContent = ({ movie }: MovieContentProps) => {
  return (
    <Container className="flex flex-col items-center justify-center gap-10 mb-20">
      <div>
        <img
          src={"https://www.themoviedb.org/t/p/w300" + movie.poster_path}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <div>
          <p>{movie.vote_average.toFixed(1)}</p>
          <p>{movie.runtime}</p>
          <p>{movie.release_date}</p>
        </div>
        <div>
          {movie.genres.map((genre) => (
            <Link key={genre.id} href={`/genre/${genre.id} `}>
              {genre.name}
            </Link>
          ))}
        </div>
        {movie.tagline && (
          <div>
            <span>Tagline:</span>
            <span>{movie.tagline}</span>
          </div>
        )}
        {movie.status && (
          <div>
            <span>Status:</span>
            {movie.status}
          </div>
        )}
      </div>
      {movie.overview && <p>{movie.overview}</p>}
    </Container>
  );
};
