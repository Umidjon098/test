import React, { Component } from 'react';
import "./styles/login-styles.css"


class LoginPage extends Component {

    state = {
        signStatus: true,
        btnName: 'Sign In',
        headText1: "Welcome ",
        headText2: " Back",
        login: "",
        password: "",
        invalid: false,
    }
    userData = {
        login: "Umidjon",
        parol: "7089",
    }
    onSignStatus = () => {
        if (this.state.signStatus) {
            this.setState({
                signStatus: false,
                btnName: "Sign Up",
                headText1: "Create ",
                headText2: "Account",
            })
        } else {
            this.setState({
                signStatus: true,
                btnName: "Sign In",
                headText1: "Welcome ",
                headText2: " Back",
            })
        }
    }
    handleChange = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        )
    }
    onSubmitLogin = (e) => {
        e.preventDefault();
        if (this.state.login === this.userData.login && this.state.password === this.userData.parol) {
            this.props.history.push("/home")
        } else {
            this.setState({ invalid: true });
        }
    }

    render() {
        const { signStatus, btnName, headText1, headText2, invalid } = this.state;
        return (
            <>
                <div className="login-box">
                    <div className='login-page'>
                        <div className="backDrop">
                            <div className="title-text">
                                <span>{headText1}</span>
                                <span>{headText2}</span>
                            </div>
                            <div className="small-text">
                                <span>Please {btnName} to continue!</span>
                            </div>
                        </div>
                        <div className="login-form">
                            <form onSubmit={this.onSubmitLogin}>
                                {signStatus ?
                                    <>
                                        {invalid ? <div className="wrong_credentials">wrong credentials!</div> : <div></div>}
                                        <span className="login-input">
                                            <input type="text" placeholder="Login" name="login" value={this.state.login} onChange={this.handleChange} required />
                                            <i className="far fa-user"></i>
                                        </span>
                                        <span className="password-input">
                                            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </> :
                                    <>
                                        <span className="login-input">
                                            <input type="text" placeholder="Firs Name" required />
                                            <i className="far fa-user"></i>
                                        </span>
                                        <span className="login-input">
                                            <input type="text" placeholder="Last Name" required />
                                            <i className="far fa-user"></i>
                                        </span>
                                        <span className="password-input">
                                            <input type="password" placeholder="Password" required />
                                            <i className="fas fa-lock"></i>
                                        </span>
                                        <span className="password-input">
                                            <input type="password" placeholder="Confirm" required />
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </>}
                                <button type="submit">{btnName}</button>
                            </form>
                            <div className="sign-up">
                                <span>{signStatus ? "Don't have an account" : "Already have an account"}</span>
                                <a onClick={this.onSignStatus}>{signStatus ? "Sign Up" : "Sign In"}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LoginPage;