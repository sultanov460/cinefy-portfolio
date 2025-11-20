"use client";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
import SearchBar from "./SearchBar";
import GenresList from "./GenresList";
import SidebarSocials from "./SidebarSocials";
import { Genre } from "@/types/types";
import { useState } from "react";

interface GenresListProps {
  genres: Genre[];
}

const SidebarClient = ({ genres }: GenresListProps) => {
  const [open, setOpen] = useState(false);

  function handleChange() {
    setOpen(!open);
  }

  function closeSidebar() {
    setOpen(false);
  }

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="xl:hidden  flex items-center justify-between p-3.5 border-b border-primary sticky top-0  bg-black/80 backdrop-blur-sm z-50">
        <Link href={"/"} className="font-bold text-4xl">
          Cin<span className="text-primary">efy</span>
        </Link>

        <button onClick={handleChange} className="cursor-pointer text-primary">
          {open ? <IoClose size={40} /> : <IoMenu size={40} />}
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-full w-full bg-black border-r border-gray-700
          px-4 py-12 flex flex-col justify-between gap-10 z-40 mt-10
          overflow-y-auto
          transform transition-transform duration-300
          xl:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SearchBar closeSidebar={closeSidebar} />
        <GenresList genres={genres} closeSidebar={closeSidebar} />
        <SidebarSocials />

        <span className="text-center mt-auto">&copy; Copyright 2025</span>
      </div>

      {/* MOBILE BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      {/* DESKTOP SIDEBAR */}
      <div className="hidden xl:flex px-4 flex-col justify-between gap-10 py-12 w-1/5 z-1 border-r border-gray-700 overflow-auto h-screen">
        <Link href={"/"} className="font-bold text-5xl">
          Cin<span className="text-primary">efy</span>
        </Link>

        <SearchBar closeSidebar={closeSidebar} />
        <GenresList closeSidebar={closeSidebar} genres={genres} />
        <SidebarSocials />

        <span className="text-center">&copy; Copyright 2025</span>
      </div>
    </>
  );
};

export default SidebarClient;
