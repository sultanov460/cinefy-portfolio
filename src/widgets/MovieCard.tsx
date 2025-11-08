import { Movie } from "@/types/movies";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import { BsFillStarFill } from "react-icons/bs";
import { getYear } from "@/utils/getYear";

interface MovieCardProps {
  movie: any;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link href={`/movies/${movie.id}`} className="flex flex-col gap-3 w-67">
      <div className="relative group">
        <img
          className="h-100 object-cover rounded-xl shadow"
          src={"https://www.themoviedb.org/t/p/w300" + movie.poster_path}
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300">
          <div className="opacity-0 group-hover:opacity-100 flex items-center justify-center text-center bg-primary p-4 rounded-full transition-all duration-300">
            <FaPlay size={50} color="#fff" />
          </div>
        </div>
      </div>
      <h1 className="text-xl tracking-[2px] font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden">
        {movie.title}
      </h1>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1">
          {movie.vote_average.toFixed(1)}
          <BsFillStarFill size={15} />
        </span>
        <span className="font-medium bg-[#363636] py-1 px-3 rounded-xl">
          {getYear(movie.release_date)}
        </span>
      </div>
    </Link>
  );
};
