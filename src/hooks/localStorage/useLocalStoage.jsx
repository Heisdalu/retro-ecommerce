import { useEffect, useState } from "react";
import { RETRO_CART, initial } from "../../constants/Types";

const useLocalStoage = () => {
  const storedData = localStorage.getItem(RETRO_CART);
  const arr = JSON.parse(storedData);
  const initialState = storedData ? arr : null;

  const [localState, setLocalState] = useState(initialState);

  const setItemLocalStorage = (obj) => {
    const stored = JSON.parse(localStorage.getItem(RETRO_CART));
    const objStringify = { ...stored, ...obj };
    localStorage.setItem(RETRO_CART, JSON.stringify(objStringify));
  };

  useEffect(() => {
    // if item is empty for first timer users... set a default
    if (!localState) {
      localStorage.setItem(RETRO_CART, JSON.stringify(initial));
      const getEmptyData = JSON.parse(localStorage.getItem(RETRO_CART));

      setLocalState(getEmptyData);
    }
  }, [localState]);

  return { localState, setItemLocalStorage };
};
export default useLocalStoage;
