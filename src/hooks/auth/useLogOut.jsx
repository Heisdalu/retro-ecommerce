import { getAuth, signOut } from "@firebase/auth";
import { SuccessToast, FailedToast } from "../../helpers/Toast/Toast";
import { useNavigate } from "react-router";
import { reset } from "../../redux/reducers/AuthSlice/AuthSlice";
import { useDispatch } from "react-redux";

const useLogOut = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const disaptch = useDispatch();

  const LogOut = async () => {
    try {
      await signOut(auth);
      SuccessToast("Logged Out");
      disaptch(reset());
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (e) {
      FailedToast("No/ Slow internet connection");
    }
  };
  return { LogOut };
};
export default useLogOut;
