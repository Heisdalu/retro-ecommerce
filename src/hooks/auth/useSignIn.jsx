import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase-config";

const useSignIn = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesage] = useState("");

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setData(response.user);
      setError(false);
    } catch (e) {
      setErrorMesage(e.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { signIn, data, loading, error, errorMessage };
};
export default useSignIn;
