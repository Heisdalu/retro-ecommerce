import { onAuthStateChanged, getAuth } from "firebase/auth";
import { success } from "../../redux/reducers/AuthSlice/AuthSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useAuthObserver = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          success({
            userCredential: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              accessToken: user.accessToken,
            },
          })
        );
      }
    });

    // clean up
    return () => unsubscribe();
  }, [auth, dispatch]);
};
export default useAuthObserver;
