import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { mainUrl } from "../../api/main/mainCaller";
import "./styles/login-styles.css";

const Register = () => {
  const [invalid, setInvalid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const history = useHistory();

  const onFinish = (e) => {
    e.preventDefault();
    setInvalid(false);
    axios
      .post(mainUrl + "/security/send-verification", { phoneNumber })
      .then(() => {
        localStorage.setItem("phoneNumber", phoneNumber);
        history.push("/verification");
      })
      .catch((error) => {
        console.log(error);
        setInvalid(true);
      });
  };

  return (
    <>
      <div className="login-box">
        <div className="login-page">
          <div className="backDrop">
            <div className="title-text">Welcome Back</div>
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
                  placeholder="Phone number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <i className="fas fa-phone"></i>
              </span>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
