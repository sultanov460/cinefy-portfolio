"use client";
import { Genre } from "@/types/movies";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface GenresListProps {
  genres: Genre[];
}

const GenresList = ({ genres }: GenresListProps) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 px-5">
      <h5 className="font-bold text-2xl">Genres</h5>
      <div className="flex flex-col gap-3">
        {genres.map((genre: Genre) => {
          const isActive = pathname === `/genre/${genre.id}`;
          return (
            <Link
              href={`/genre/${genre.id} `}
              key={genre.id}
              className={`text-lg transition duration-300 ${
                isActive
                  ? "text-primary font-semibold"
                  : "text-gray-300 xl:hover:text-primary"
              } xl:hover:text-primary `}
            >
              {genre.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GenresList;
