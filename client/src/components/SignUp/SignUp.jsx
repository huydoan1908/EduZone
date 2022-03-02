import React from 'react'
import {InputGroup,FormControl,Button,Container,Row,Col} from 'react-bootstrap'
import './SignUp.scss'
export default function SignUp() {
  return (
    <>
      <Container className="signup-container">
        <Row>
          <Col className="signup-image">
            <img src="https://template.hasthemes.com/edule/eduLe/assets/images/register-login.png"></img>
          </Col>

          <Col className="col-signup">
            <div className="signup-form">
              <div className="title">
                Registration
                <span> Now</span>
              </div>
              <div className="form">
                <InputGroup size="lg">
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Name"
                    style={{ margin: "2rem 0 1rem 0", borderRadius: "1rem" }}
                  />
                </InputGroup>
                <InputGroup size="lg">
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Email"
                    style={{ marginBottom: "1rem", borderRadius: "1rem" }}
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
                <InputGroup size="lg">
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Confirm Password"
                    style={{ marginBottom: "1rem", borderRadius: "1rem" }}
                  />
                </InputGroup>
                <div className="signup-submit">
                  <Button
                    variant="primary"
                    style={{ margin: "1rem 0 1rem 0", borderRadius: "1rem" }}
                  >
                    SIGNUP
                  </Button>
                  <Button
                    variant="primary"
                    style={{
                      borderRadius: "1rem",
                    }}
                  >
                    SIGNUP with Google
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
