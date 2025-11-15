"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue || searchValue.length < 3)
      return alert("Please enter a search query");

    router.push(`/search/${searchValue}`);

    setSearchValue("");
  };
  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="mx-5 p-3 rounded-2xl outline-none bg-[#363636]"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button>
        <FaSearch
          size={20}
          className="absolute right-8 bottom-3.5 hover:xl:text-primary transition duration-300 cursor-pointer"
        />
      </button>
    </form>
  );
};

export default SearchBar;
