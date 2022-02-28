import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorImg from '../../images/error.webp';

export default function Error404() {
    return (
        <Container>
            <Row className="p-5">
                <Col lg={6}>
                    <div className="error-img">
                        <img src={ErrorImg} alt="Error" />
                    </div>
                </Col>
                <Col lg={{span: 5, offset: 1}} className="px-3 py-5">
                    <h3 className="color-primary mb-5">
                        This Page is Not Found
                    </h3>
                    <h2 className="info-text mb-5">We are very sorry for error. We <span>can’t find this</span> page.</h2>
                    <p className="fs-4">It has survived not only five centuries but also the leap into electronic typesetting.</p>
                    <Link to="/" className="btn-bubble px-4 py-4 fs-4 mt-5">Back to Home</Link>
                </Col>
            </Row>
        </Container>
    )
}