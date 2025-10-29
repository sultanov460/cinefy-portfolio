import { Genre } from "@/types/movies";
import Link from "next/link";

interface GenresListProps {
  genres: Genre[];
}

const GenresList = ({ genres }: GenresListProps) => {
  return (
    <div className="flex flex-col gap-4 px-5">
      <h5 className="font-bold text-2xl">Genres</h5>
      <div className="flex flex-col gap-3">
        {genres.map((genre: Genre) => (
          <Link
            href={`/genre/${genre.id} `}
            key={genre.id}
            className="text-lg text-gray-400 xl:hover:text-primary transition duration-300"
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresList;
