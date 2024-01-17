import { useState } from "react";
import { auth } from "../../configs/firebase-config";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { success } from "../../redux/reducers/AuthSlice/AuthSlice";
import { useDispatch } from "react-redux";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesage] = useState("");
  const dispatch = useDispatch();

  const Login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (
        response.user.uid &&
        response.user.displayName &&
        response.user.email
      ) {
        dispatch(
          success({
            userCredential: {
              uid: response.user.uid,
              email: response.user.email,
              displayName: response.user.displayName,
            },
          })
        );
      }
      setError(false);
    } catch (e: unknown) {
      setError(true);
      if (e instanceof Error && e.message.includes("auth/user-not-found")) {
        return setErrorMesage("email does not exist");
      }
      if (e instanceof Error && e.message.includes("auth/wrong-password")) {
        return setErrorMesage("email and password are not correct");
      }

      if (
        e instanceof Error &&
        e.message.includes("auth/network-request-failed")
      ) {
        return setErrorMesage(
          "Please check your internet connection and try again"
        );
      }

      setErrorMesage("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { Login, loading, error, errorMessage };
};
export default useLogin;

// downlaod reposnivley
