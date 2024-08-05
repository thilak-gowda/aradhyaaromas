import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import { useDispatch,useSelector } from "react-redux";
import { LoginUserData, ProfileUserData, fetchBannerData } from "../../../../features/reducer/thunks";
import { useEffect, useState } from "react";

const FormContent = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    loginData: loginresponce,
  } = useSelector((state) => state.loginData);
  useEffect(() => {
    dispatch(ProfileUserData("65a614e5e3e4e23a6fcfd88a"));
    
    // Retrieve saved login data from local storage
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
    }
  }, []);
  useEffect(() => {
    const handleLoginResponse = async () => {
      if (loginresponce?.userId) {
        try {
            console.log(loginresponce);

          // Set userId in localStorage
          localStorage.setItem("userId", loginresponce.userId);
          // Reload the page and redirect to the home page
          window.location.reload();
          window.location.href = "/";
        } catch (error) {
          console.error("Error handling login response:", error);
        }
      }
    };

    handleLoginResponse();
  }, [loginresponce?.userId]);

  const handleLogin = async () => {
    const loginData = {
      email: email,
      password: password,

    };
    

  

   await dispatch(LoginUserData(loginData));
      // Save login data to local storage
      localStorage.setItem("userId", password);
      window.location.reload();
  };

  return (
    <div className="form-inner">
      <h3>Login to Realty JOb</h3>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="button"
            name="log-in"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Signup
          </Link>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
