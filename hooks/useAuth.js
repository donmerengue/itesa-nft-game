import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";
import { getUser, login } from "../state/user";

const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(getUser(user.uid));
    }
  }, [user]);
};

export default useAuth;
