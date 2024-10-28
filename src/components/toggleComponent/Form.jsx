import React, { useEffect, useRef, useState } from "react";
import "./form.css";

const Form = () => {
  const signupRef = useRef(null);
  const loginRef = useRef(null);
  const sliderRef = useRef(null);
  const formSectionRef = useRef(null);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [sigUpData, setSigUpData] = useState({
    emaildata: "",
    passworddata: "",
    conformdata: "",
  });
  const [title, setTitle] = useState("Login"); // Initial title is "Login"

  useEffect(() => {
    const handleSignupClick = () => {
      sliderRef.current.classList.add("moveslider");
      formSectionRef.current.classList.add("form-section-move");
      setTitle("Signup Form");
    };

    const handleLoginClick = () => {
      sliderRef.current.classList.remove("moveslider");
      formSectionRef.current.classList.remove("form-section-move");
      setTitle("Login Form");
    };

    signupRef.current.addEventListener("click", handleSignupClick);
    loginRef.current.addEventListener("click", handleLoginClick);

    return () => {
      signupRef.current.removeEventListener("click", handleSignupClick);
      loginRef.current.removeEventListener("click", handleLoginClick);
    };
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleInput = (e) => {
    e.preventDefault();
    console.log(sigUpData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleInputChangeData = (e) => {
    const { name, value } = e.target;
    setSigUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="bg-white rounded-3xl">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-10 pt-10">{title}</h1>
        </div>
        <div className="container">
          <div className="slider" ref={sliderRef}></div>
          <div className="btn">
            <button className="login" ref={loginRef}>
              Login
            </button>
            <button className="signup" ref={signupRef}>
              Signup
            </button>
          </div>
          <div className="form-section" ref={formSectionRef}>
            <div className="login-box">
              <input
                type="email"
                className="email ele"
                placeholder="Email Address"
                name="email"
                value={data.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                className="password ele"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
              />
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>

              <button onClick={handleChange} className="clkbtn">
                Login
              </button>
              <div className="flex justify-center">
                <p className="text-sm font-light text-black">
                  Not a Member?
                  <a
                    href="signup-box"
                    className="font-medium ml-2 text-blue-500 text-pri hover:underline dark:text-primary-500"
                  >
                    Signup now
                  </a>
                </p>
              </div>
            </div>

            <div className="signup-box">
              <input
                type="email"
                className="email ele"
                placeholder="Email Address"
                name="emaildata"
                value={sigUpData.emaildata}
                onChange={handleInputChangeData}
              />
              <input
                type="password"
                className="password ele"
                placeholder="Password"
                name="passworddata"
                value={sigUpData.passworddata}
                onChange={handleInputChangeData}
              />
              <input
                type="password"
                className="password ele"
                placeholder="Confirm Password"
                name="conformdata"
                value={sigUpData.conformdata}
                onChange={handleInputChangeData}
              />
              <button onClick={handleInput} className="clkbtn">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
