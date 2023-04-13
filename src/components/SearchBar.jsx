import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
const SearchBar = ({ search, setSearch, handleSearch, dark }) => {
  const inputRef = useRef();
  return (
    <div
      className={`p-4 xl:pr-96 xl:pl-96 xl:pt-6 sticky -top-1 z-20 ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <form className="flex items-center w-full relative" onSubmit={handleSearch}>
        <label htmlFor="input-word" className="hidden">
          Input
        </label>
        <input
          autoFocus
          ref={inputRef}
          type="text"
          id="input-word"
          required
          value={search}
          className={`${
            dark ? "bg-white text-white" : "bg-black text-black"
          } bg-opacity-10 flex-grow h-14 p-4 rounded-xl text-lg focus:border-primary-100 focus:border-2 focus:outline-none`}
          autoComplete="false"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          aria-label="search"
          onClick={() => inputRef.current.focus}
          className="absolute right-4 hover:cursor-pointer"
        >
          <BiSearch className="h-6 w-6 text-primary-100  " />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
