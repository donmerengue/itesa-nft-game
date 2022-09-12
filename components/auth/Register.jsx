import { useForm } from "react-hook-form";
import createAccount from "../../utils/createAccount";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../state/user";

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const registerHandler = () => {
    dispatch(register());
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
      <button id="btnLogin" type="button" className="button buttonBlue">
        Log in
      </button>
      <button
        id="btnSignup"
        type="button"
        className="button buttonBlue"
        onClick={registerHandler}
      >
        Sign up
      </button>
    </form>
  );
};

export default Register;
