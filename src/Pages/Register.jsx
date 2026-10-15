import "./Register.css";

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

          <h1>Create Your Account</h1>
          <p>Register to start shopping with ShopKart</p>
        </div>

        <form className="loginForm">
          <div className="formGroup">
            <label htmlFor="username">Full Name</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Full Name"
              required
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="Example@gmail.com"
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
            
            <label htmlFor="username">Confirm Password</label>
            <input
              type="password"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <button type="submit" className="loginButton">
            Register
          </button>

          <p className="registerText">
            Already have an account?{" "}
            <a href="/Login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;