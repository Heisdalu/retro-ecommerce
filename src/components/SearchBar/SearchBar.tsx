import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar: FC = () => {
  const [value, setValue] = useState("");
  const [off, setOff] = useState(true);
  const navigate = useNavigate();

  const resetHandler = () => {
    navigate(`/search/${value}`);
  };

  useEffect(() => {
    if (value) {
      setOff(false);
    }
  }, [value]);

  return (
    <>
      <div className="mb-1 px-1">
        <div className="pt-1.5  pb-[5px] flex font-400 font-Inter md:justify-center sticky top-[0]">
          <input
            type="search"
            name="search"
            id="search"
            className="border-1 border-solid border-bc1 rounded-l-[4px] border-r-[0] outline-none px-0.5 w-[90%] text-1 py-1 md:w-[400px]"
            autoComplete="off"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            onClick={resetHandler}
            disabled={off}
            className="text-white bg-black py-[11px] px-[16px] rounded-rx2 text-0.875 md:text-1 flex centerPos"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
