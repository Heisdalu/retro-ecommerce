import { useState } from "react";
import { RETRO_CART, initial } from "../../constants/Types";

const useLocalStoage = () => {
  const storedData = localStorage.getItem(RETRO_CART);
  const initialState = storedData ? JSON.parse(storedData) : null;
  const [localState, setLocalState] = useState(initialState);

  // if item is empty for first timer users... set a default
  if (!localState) {
    localStorage.setItem(RETRO_CART, JSON.stringify(initial));
    const getEmptyData = JSON.parse(localStorage.getItem(RETRO_CART));
    setLocalState(getEmptyData);
  }

  const setItem = (obj) => {
    localStorage.setItem(RETRO_CART, JSON.stringify(obj));
    const getData = JSON.parse(localStorage.getItem(RETRO_CART));
    setLocalState(getData);
  };

  const removeItem = () => {
    localStorage.removeItem(RETRO_CART);
  };

  return { localState, setItem, removeItem };
};
export default useLocalStoage;
