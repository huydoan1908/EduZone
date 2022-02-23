import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Homepage.scss';

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="banner">
                <div className="text">
                    <div className="rotate__image">
                        <img src="https://template.hasthemes.com/edule/eduLe/assets/images/shape/shape-8.png" alt="" />
                    </div>
                    <h5>Start your favourite course</h5>
                    <br></br>
                    <h2>Now learning from anywhere, and build your <span>bright career.</span></h2>
                    <br></br>
                    <br></br>
                    <p>It has survived not only five centuries but also the leap into electronic typesetting</p>
                    <a href="/" className="button">Start A Course</a>
                </div>
                <div className="image"></div>
                <div className="rating"></div>
            </div>
            <Container>

            </Container>
        </div>

    )
}