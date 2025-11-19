"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue || searchValue.length < 3)
      return alert("Please enter a search query");

    router.push(`/search/${searchValue}`);
    setSearchValue("");

    closeSidebar();
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <input
        type="text"
        placeholder="Search..."
        className="p-3 pr-12 w-full rounded-2xl outline-none bg-[#363636]"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button
        type="submit"
        className="absolute top-1/2 right-4 -translate-y-1/2"
      >
        <FaSearch
          size={20}
          className="hover:text-primary transition duration-300"
        />
      </button>
    </form>
  );
};

export default SearchBar;
