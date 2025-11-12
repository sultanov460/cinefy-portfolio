import { ActorCast } from "@/types/actors";
import { MovieCard } from "@/widgets/MovieCard";

interface ActorCastProps {
  actorCast: ActorCast[];
}

const ActorCast = ({ actorCast }: ActorCastProps) => {
  return (
    <div className="py-20 ">
      <h1 className="text-5xl mb-12 font-bold text-center">Similar Movies</h1>
      <div className="flex flex-wrap justify-center gap-8 items-center">
        {actorCast.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default ActorCast;
