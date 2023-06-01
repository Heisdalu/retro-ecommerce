import { useState } from "react";
import NotSavedIcon from "../../assets/icons/NotSavedIcon";
import SavedIcon from "../../assets/icons/SavedIcon";

const Count = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className="text-0.75 absolute right-[3px] font-Inter font-400 top-[5px]
      "
      onClick={() => setClicked((prev) => !prev)}
    >
      {clicked ? <SavedIcon /> : <NotSavedIcon />}
    </button>
  );
};
export default Count;
