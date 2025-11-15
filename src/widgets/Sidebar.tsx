import { getMovieGenres } from "@/utils/movies";
import Link from "next/link";
import GenresList from "./GenresList";
import SidebarSocials from "./SidebarSocials";
import SearchBar from "./SearchBar";

const Sidebar = async () => {
  const { genres } = await getMovieGenres();

  return (
    <div className="flex flex-col justify-between gap-10 py-12 w-1/5 z-1 border-r border-gray-700 overflow-auto h-screen">
      <Link href={"/"} className="font-bold text-5xl px-5">
        Cin<span className="text-primary">efy</span>
      </Link>
      <SearchBar />
      <GenresList genres={genres} />
      <SidebarSocials />
      <span className="text-center">&copy; Copyright 2025</span>
    </div>
  );
};

export default Sidebar;
