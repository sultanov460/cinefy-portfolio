import { ActorCast } from "@/types/actors";
import { MovieCard } from "@/widgets/MovieCard";

interface ActorCastProps {
  actorCast: ActorCast[];
  gender: number;
}

const OtherMovies = ({ actorCast, gender }: ActorCastProps) => {
  return (
    <div className="py-20 ">
      <h1 className="text-5xl mb-12 font-bold text-center">
        You can see {gender === 1 ? "her" : "him"} in:
      </h1>
      <div className="flex flex-wrap justify-center gap-8 items-center">
        {actorCast.slice(0, 12).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default OtherMovies;
