import React, { useState, useEffect } from "react";
import "./style.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// import {Link}   from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const modifychange = (e) => {
    //destructure
    const { name, value } = e.target;
    // taking all initial states
    // take email as key and assign the value to the key
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleClick = (e) => {
    e.preventDefault(); // prevent the default form submission
    // do something with the email and password values, such as submit them to a server
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    //log the formValues when the formErrors state
    // is updated and the isSubmit state is true.
    //The second argument to the useEffect hook is an array of dependencies.
    // This tells React when the useEffect hook should be re-executed.
    // In this case,
    //the useEffect hook is re-executed whenever the formErrors state is updated.
    // if the form is ready to be submitted by checking if there are no errors in the
    //formErrors object and the isSubmit state is true.
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errs = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pass =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;

    if (!values.email) {
      errs.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errs.email = "This is not a valid email";
    }

    if (!values.password) {
      errs.password = "Password is required";
    } else if (!pass.test(values.password)) {
      errs.password = "This is not a valid password";
    }

    return errs;
  };

  return (
    <MDBContainer className="my-5 ">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="succes_massage">
          Signed in successfully {window.scroll(0, 0)}
        </div>
      ) : (
        <div className="succes_massage"></div>
      )}
      <MDBCard>
        <MDBRow className="g-0 ">
          <MDBCol md="6 ">
            <MDBCardImage
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1677838566~exp=1677839166~hmac=a6906ec41585d1a68c1783b8d6a8411f6182d27ba1e463c6f3885c81042aeeb8"
              alt="login Image"
              className="rounded-1 w-100"
            />
          </MDBCol>

          <MDBCol md="6 ">
            <MDBCardBody className="d-flex flex-column ">
              <div className=" d-flex flex-row ps-5 pt-5 txt">
                <span className="  h5 fw-mediam mb-0  ">
                  Library management System{" "}
                </span>
                <MDBCardImage
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjMwNGExYjEyNzY1MGVjYTZmM2Y5ZGRmMDAzOTI5MGRhODQzMmYwNyZjdD1n/xT77Y1T0zY1gR5qe5O/giphy.gif"
                  alt="login Image"
                  className="rounded-1 wdth"
                />
              </div>
              <h5 className=" ps-5 fw-normal my-4 pd-3 sign">
                Sign into your account
              </h5>
              <div className="d-flex flex-column input-group ">
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-80 fw-bold  "
                  className="input-field form-group  "
                  label="Email address"
                  placeholder="Enter email address"
                  id="formControlLg"
                  type="email"
                  name="email"
                  size="lg"
                  value={formValues.email}
                  onChange={modifychange}
                />
                <p className="Invalid">{formErrors.email}</p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-80 fw-bold  "
                  className="input-field form-group"
                  label="Password"
                  id="formControlLg"
                  placeholder="Enter password"
                  type={showPassword ? "text" : "password"}
                  size="lg"
                  value={formValues.password}
                  name="password"
                  onChange={modifychange}
                />
             
              <p className="Invalid">{formErrors.password}</p>
            
              <span className="input-group-text" onClick={togglePassword}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
              </div>
              <MDBCheckbox
                className="fw-bold mx-4 mb-4"
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />

              <div className="d-flex flex-column">
                <MDBBtn
                  className=" mb-4 mx-5 my-button"
                  size="lg"
                  type="button"
                  style={{ backgroundColor: "#40ABCE", border: "none" }}
                  onClick={handleClick}
                >
                  Login
                </MDBBtn>

                <a className="text-center fw-bold small text-muted" href="#!">
                  Forgot password?
                </a>
                <p className="text-center mb-5 pb-lg-2">
                  Don't have an account?
                  <a href="#!" style={{ color: "#3B71CA" }}>
                    <Link to="/signup">Register here</Link>
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
