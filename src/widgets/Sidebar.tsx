import { getMovieGenres } from "@/utils/movies";
import Link from "next/link";
import GenresList from "./GenresList";
import SidebarSocials from "./SidebarSocials";

const Sidebar = async () => {
  const { genres } = await getMovieGenres();

  return (
    <div className="flex flex-col justify-between gap-10 py-12 w-1/5 z-1 border-r border-gray-700 overflow-auto h-screen">
      <Link href={"/"} className="font-bold text-5xl px-5">
        Cin<span className="text-primary">efy</span>
      </Link>
      <input
        type="text"
        placeholder="Search..."
        className="mx-5 p-3 rounded-2xl outline-none bg-[#363636]"
      />
      <GenresList genres={genres} />
      <SidebarSocials />
      <span className="text-center">&copy; Copyright 2025</span>
    </div>
  );
};

export default Sidebar;
