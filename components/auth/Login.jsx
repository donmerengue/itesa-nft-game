import loginEmail from "../../utils/loginEmail";

const Login = () => {
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
        onClick={loginEmail}>
        Log in
      </button>
      <button id="btnSignup" type="button" className="button buttonBlue">
        Sign up
      </button>
    </form>
  );
};

export default Login;
