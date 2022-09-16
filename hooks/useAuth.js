import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";
import { getUser, login } from "../state/user";

const useAuth = () => {
  const dispatch = useDispatch();

  // Get user data from Firebase Auth
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!loading) {
      dispatch(getUser(user.uid));
    }
  }, [user]);
};

export default useAuth;
