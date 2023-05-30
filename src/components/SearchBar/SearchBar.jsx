const SearchBar = () => {
  return (
    <div className="p-1 pt-1.5 pb-1  flex font-400 font-Inter">
      <input
        type="search"
        name="search"
        id="search"
        className="border-1 border-solid border-bc1 rounded-rxl outline-none px-0.5 w-[90%] text-0.875 py-1"
      />
      <button className="text-white bg-black py-[11px] px-[16px] rounded-rx2 text-0.875">
        Search
      </button>
    </div>
  );
};
export default SearchBar;
