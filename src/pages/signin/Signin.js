import React, { useState, useEffect } from "react";
import { login } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/app-logo.svg";

const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    console.log("user Info ==> ",userInfo)
    if (userInfo) {
      history.push("/dashboard");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="row g-0 app-auth-wrapper">
      <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
        <div className="d-flex flex-column align-content-end">
          <div className="app-auth-body mx-auto">
            <div className="app-auth-branding mb-4">
              <a className="app-logo" href="index.html">
                <img className="logo-icon me-2" src={logo} alt="logo" />
              </a>
            </div>
            <h2 className="auth-heading text-center mb-5">Log in to Portal</h2>
            <div className="auth-form-container text-start">
              <form className="auth-form login-form" onSubmit={submitHandler}>
                <div className="email mb-3">
                  <label className="sr-only" for="signin-email">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required="required"
                    className="form-control signin-password"
                  />
                </div>
                <div className="password mb-3">
                  <label className="sr-only" for="signin-password">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control signin-password"
                  />
                  <div className="extra mt-3 row justify-content-between">
                    <div className="col-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="RememberPassword"
                        />
                        <label
                          className="form-check-label"
                          for="RememberPassword"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="forgot-password text-end">
                        <a href="reset-password.html">Forgot password?</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn app-btn-primary w-100 theme-btn mx-auto"
                  >
                    Log In
                  </button>
                </div>
              </form>

              <div className="auth-option text-center pt-5">
                No Account? Sign up
                <a className="text-link" href="signup.html">
                  here
                </a>
                .
              </div>
            </div>
          </div>

          <footer className="app-auth-footer">
            <div className="container text-center py-3">
              <small className="copyright">
                Designed with
                <i className="fas fa-heart" style={{ color: "#fb866a" }}></i> by
                <a className="app-link" href="http://themes.3rdwavemedia.com">
                  Xiaoying Riley
                </a>
                for developers
              </small>
            </div>
          </footer>
        </div>
      </div>
      <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div className="auth-background-holder"></div>
        <div className="auth-background-mask"></div>
        <div className="auth-background-overlay p-3 p-lg-5">
          <div className="d-flex flex-column align-content-end h-100">
            <div className="h-100"></div>
            <div className="overlay-content p-3 p-lg-4 rounded">
              <h5 className="mb-3 overlay-title">
                Explore Portal Admin Template
              </h5>
              <div>
                Portal is a free Bootstrap 5 admin dashboard template. You can
                download and view the template license
                <a href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
                  here
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
