import { useDispatch, useSelector } from "react-redux";
import { login, linkLogin } from "../../state/user";


const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const loginHandler = () => {
    dispatch(login());
  };

  const loginLinkHandler = () => {
    dispatch(linkLogin());
  };

  

  return (
    <form>
      <div className="group">
        <input id="txtEmail" type="email" />
        <label>Email</label>
      </div>
      <div className="group">
        <input id="txtPassword" type="password" />
        <label>Password</label>
      </div>
      <div id="divLoginError" className="group">
        <div id="lblLoginErrorMessage" className="errorlabel">
          Error message
        </div>
      </div>
      <button
        id="btnLogin"
        type="button"
        className="button buttonBlue"
        onClick={loginHandler}>
        Log in
      </button>
      <button id="btnSignup" type="button" className="button buttonBlue">
        Sign up
      </button>
      <button
        id="btnLoginLink"
        type="button"
        className="button buttonBlue"
        onClick={loginLinkHandler}>
        Send Login Link
      </button>
      <button
        id="recaptcha-container-id"
        type="button"
        className="button buttonBlue">
        RECAPTCHA CONTAINER
      </button>
    </form>
  );
};

export default Login;
