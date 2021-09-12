import React, { Component } from "react";
import "./styles/login-styles.css";
import axios from "axios";
class LoginPage extends Component {
  state = {
    login: "",
    password: "",
    subdomain: "",
    invalid: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitLogin = async (e) => {
    e.preventDefault();
    const URL = `https://${this.state.subdomain}.ox-sys.com/security/auth_check`;
    let userData = new FormData();
    userData.append("_username", this.state.login);
    userData.append("_password", this.state.password);
    userData.append("_subdomain", this.state.subdomain);
    await axios({
      method: "POST",
      url: URL,
      data: userData,
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        if (localStorage.getItem("token")) {
          this.props.history.push("/home");
        }
      })
      .catch(() => {
        this.setState({ invalid: true });
      });
  };

  render() {
    const { invalid } = this.state;
    return (
      <>
        <div className="login-box">
          <div className="login-page">
            <div className="backDrop">
              <div className="title-text">Welcome Back</div>
              <div className="small-text">
                <span>Please Sign in to continue!</span>
              </div>
            </div>
            <div className="login-form">
              <form onSubmit={this.onSubmitLogin}>
                {invalid ? (
                  <div className="wrong_credentials">Invalid credentials!</div>
                ) : (
                  <div></div>
                )}
                <span className="login-input">
                  <input
                    type="text"
                    placeholder="Subdomain"
                    name="subdomain"
                    value={this.state.subdomain}
                    onChange={this.handleChange}
                    required
                  />
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span className="login-input">
                  <input
                    type="text"
                    placeholder="Login"
                    name="login"
                    value={this.state.login}
                    onChange={this.handleChange}
                    required
                  />
                  <i className="far fa-user"></i>
                </span>
                <span className="password-input">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                  <i className="fas fa-lock"></i>
                </span>

                <button type="submit">Log In</button>
              </form>
              <div className="sign-up">
                <span>"Don't have an account"</span>
                <a>Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
