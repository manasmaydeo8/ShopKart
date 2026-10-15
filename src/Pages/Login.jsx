import "./Login.css";

function Login() {
  return (
    <div className="loginPage">
      <div className="loginCard">
        <div className="loginHeader">
          <img
            src="/Images/logo.png"
            alt="ShopKart Logo"
            className="login-logo"
          />

          <h1>Welcome Back!</h1>
          <p>Login to continue shopping with ShopKart</p>
        </div>

        <form className="loginForm">
          <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="loginButton">
            Login
          </button>

          <p className="registerText">
            Don't have an account?{" "}
            <a href="/Register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;