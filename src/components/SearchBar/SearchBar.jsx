const SearchBar = () => {
  return (
    <div className="p-1 pt-1.5 pb-1  flex font-400 font-Inter md:justify-center sticky top-[0]">
      <input
        type="search"
        name="search"
        id="search"
        className="border-1 border-solid border-bc1 rounded-rxl outline-none px-0.5 w-[90%] text-1 py-1 md:w-[400px]"
        autoComplete="off"
      />
      <button className="text-white bg-black py-[11px] px-[16px] rounded-rx2 text-0.875 md:text-1">
        Search
      </button>
    </div>
  );
};
export default SearchBar;
