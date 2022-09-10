import { useForm } from "react-hook-form";
import createAccount from "../../utils/createAccount";

const Register = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm();
  //   const onSubmit = (data) => console.log(data);

  //   console.log(watch("password")); // watch input value by passing the name of it

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
        onClick={createAccount}>
        Sign up
      </button>
    </form>
  );
};

export default Register;
