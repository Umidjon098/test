import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { mainUrl } from "../../api/main/mainCaller";
import Countdown from "react-countdown";
import "./styles/login-styles.css";

const Verification = () => {
  const [invalid, setInvalid] = useState(false);
  const [code, setCode] = useState(null);

  const phoneNumber = localStorage.getItem("phoneNumber");
  const history = useHistory();

  const onFinish = (e) => {
    e.preventDefault();
    setInvalid(false);
    axios
      .post(mainUrl + "/security/verify-login", { phoneNumber, code })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/companies");
        localStorage.removeItem("phoneNumber");
      })
      .catch((error) => {
        console.log(error);
        setInvalid(true);
      });
  };
  const Resend = () => {
    axios.post(mainUrl + "/security/send-verification", { phoneNumber });
    window.location.reload();
  };
  const Completionist = () => (
    <span style={{ cursor: "pointer" }} onClick={Resend}>
      Resend
    </span>
  );
  return (
    <>
      <div className="login-box">
        <div className="login-page">
          <div className="backDrop">
            <div className="title-text">Enter verification code</div>
            <div className="small-text">
              <span>Please Sign up to continue!</span>
            </div>
          </div>
          <div className="login-form">
            <form onSubmit={onFinish}>
              {invalid && (
                <div className="wrong_credentials">Invalid credentials!</div>
              )}
              <span className="login-input">
                <input
                  type="number"
                  placeholder="Code"
                  name="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
                <i className="fas fa-lock"></i>
              </span>
              <button type="submit">Submit</button>
              <div className="mt-3 text-center">
                <Countdown date={Date.now() + 120000}>
                  <Completionist />
                </Countdown>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
