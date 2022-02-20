import {
    Container,
    Row,
    Col,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col sm={6} lg={3} className="my-3">
                        <h2 className="fw-bold text-uppercase mb-3">Edu<span className='color-primary'>Zone</span></h2>
                        <h5>Ho Chi Minh City</h5>
                        <div className="email mt-3">
                            <i class="fa-solid fa-envelope color-primary me-3"></i>
                            <Link to='/'>eduzone@gmail.com</Link>
                        </div>
                        <div className="phone mb-3">
                            <i class="fa-solid fa-phone color-primary me-3"></i>
                            <Link to="/">(+84) 0123456789</Link>
                        </div>
                        <div className="social">
                            <Link to="/">
                                <i class="fa-brands fa-facebook-square"></i>
                            </Link>
                            <Link to="/">
                                <i class="fa-brands fa-twitter"></i>
                            </Link>
                            <Link to="/">
                                <i class="fa-brands fa-skype"></i>
                            </Link>
                            <Link to="/">
                                <i class="fa-brands fa-instagram"></i>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={6} lg={3} className="my-3">
                        <h4 className="mb-3">Category</h4>
                        <Link to="/" className="d-block my-2">Creative Writing</Link>
                        <Link to="/" className="d-block my-2">UI/UX</Link>
                        <Link to="/" className="d-block my-2">Design</Link>
                        <Link to="/" className="d-block my-2">Critical Thinking</Link>
                        <Link to="/" className="d-block my-2">Marketing</Link>
                        <Link to="/" className="d-block my-2">Coding</Link>
                    </Col>
                    <Col sm={6} lg={3} className="my-3">
                        <h4 className="mb-3">Quick Links</h4>
                        <Link to="/" className="d-block my-2">FAQ</Link>
                        <Link to="/" className="d-block my-2">Policy</Link>
                        <Link to="/" className="d-block my-2">Discussion</Link>
                        <Link to="/" className="d-block my-2">Term & Condition</Link>
                    </Col>
                    <Col sm={6} lg={3} className="my-3">
                        <h4 className="mb-3">Subcribes</h4>
                        <p>Worried miss our new? Get update from everywhere.</p>
                        <Form>
                            <FormControl
                                type='email'
                                placeholder='Your Email'
                                className="my-2"
                            />
                            <Button className="rounded-3 my-2">Subcribes Now</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}