import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../configs/firebase-config";
import { success } from "../../redux/reducers/AuthSlice";
import { useDispatch } from "react-redux";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesage] = useState("");
  const dispatch = useDispatch();

  const signUp = async (firstname, lastname, email, password) => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response.user) {
        //update user firstname and lastname
        await updateProfile(auth.currentUser, {
          displayName: `${firstname} ${lastname}`,
        });
      }

      dispatch(
        success({
          userCredential: {
            uid: response.user.uid,
            email: response.user.email,
            displayName: response.user.displayName,
            accessToken: response.user.accessToken,
          },
        })
      );

      setError(false);
    } catch (e) {
      setError(true);
      if (e.message.includes("auth/email-already-in-use")) {
        return setErrorMesage("Email already in use");
      }

      if (e.message.includes("auth/network-request-failed")) {
        return setErrorMesage(
          "Please check your internet connection and try again"
        );
      }

      setErrorMesage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading, error, errorMessage };
};
export default useSignUp;
