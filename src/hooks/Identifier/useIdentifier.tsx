import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RETRO_ID } from "../../constants/Types";

const useIdentifier = () => {
  const stored = localStorage.getItem(RETRO_ID) || null;
  const [guestId, setGuestId] = useState<string | null>(stored);

  useEffect(() => {
    if (!stored) {
      const unique = uuidv4();
      const id = unique.split("-").join("").substring(0, 15);
      setGuestId(id);
      localStorage.setItem(RETRO_ID, id);
    }
  }, [stored]);

  return guestId;
};

export default useIdentifier;
