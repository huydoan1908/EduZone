import React from 'react'
import './Login.scss'
import {Button,FormControl,InputGroup} from 'react-bootstrap'
export default function Login() {
  return (
    <>
      <div className="login-wrapper">
        <div className="login-image">
          <img src="https://template.hasthemes.com/edule/eduLe/assets/images/register-login.png"></img>
        </div>

        <div className="login-form">
          <div className="title">
            Login
            <span> Now</span>
          </div>
          <div className="form">
            <InputGroup size="lg">
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Username or Email"
                style={{ margin: "2rem 0 1rem 0", borderRadius: "1rem" }}
              />
            </InputGroup>
            <InputGroup size="lg">
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Password"
                style={{ marginBottom: "1rem", borderRadius: "1rem" }}
              />
            </InputGroup>
            <div className="login-submit">
              <Button
                variant="primary"
                style={{ margin: "1rem 0 1rem 0", borderRadius: "1rem" }}
              >
                Login
              </Button>
              <Button
                variant="primary"
                style={{
                  borderRadius: "1rem",
                }}
              >
                Login with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
