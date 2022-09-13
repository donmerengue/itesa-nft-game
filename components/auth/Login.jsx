import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/user";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


const loginHandler = () =>{
  dispatch(login());
  
}



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
    </form>
  );
};

export default Login;
