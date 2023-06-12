import { useEffect, useState } from "react";
import { RETRO_CART, initial } from "../../constants/Types";

const useLocalStoage = () => {
  const storedData = localStorage.getItem(RETRO_CART);
  const arr = JSON.parse(storedData);
  const initialState = storedData ? arr : null;

  const [localState, setLocalState] = useState(initialState);

  const setItem = (obj) => {
    localStorage.setItem(RETRO_CART, JSON.stringify(obj));
    const getData = JSON.parse(localStorage.getItem(RETRO_CART));
    setLocalState(getData);
  };

  const removeItem = () => {
    localStorage.removeItem(RETRO_CART);
  };

  useEffect(() => {
    // if item is empty for first timer users... set a default
    if (!localState) {
      localStorage.setItem(RETRO_CART, JSON.stringify(initial));
      const getEmptyData = JSON.parse(localStorage.getItem(RETRO_CART));

      setLocalState(getEmptyData);
    }
  }, [localState]);

  return { localState, setItem, removeItem };
};
export default useLocalStoage;
