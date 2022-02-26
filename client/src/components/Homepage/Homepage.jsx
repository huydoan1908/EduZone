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
                <div className="rotate__image">
                    <img src="https://template.hasthemes.com/edule/eduLe/assets/images/shape/shape-8.png" alt="" />
                </div>
                <Container>
                    <div className="text">

                        <h5>Start your favourite course</h5>
                        <br></br>
                        <h2>Now learning from anywhere, and build your <span>bright career.</span></h2>
                        <br></br>
                        <br></br>
                        <p>It has survived not only five centuries but also the leap into electronic typesetting</p>
                        <a href="/" className="button">Start A Course</a>
                    </div>
                    <div className="static circle">
                        <i class="fa-solid fa-book-open"></i>
                        <span>1,235</span>
                        <p>courses</p>
                        <div className="arrow">
                            <img src="https://template.hasthemes.com/edule/eduLe/assets/images/shape/shape-5.png" alt="" />
                        </div>
                        <div className="pattern">
                            <img src="https://template.hasthemes.com/edule/eduLe/assets/images/shape/shape-6.png" alt="" />
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://template.hasthemes.com/edule/eduLe/assets/images/slider/slider-1.png" alt="" />
                    </div>
                </Container>
                <div className="rating circle">
                    <span>4.8<i class="fa-solid fa-star"></i></span>
                    <p>Rating (86k)</p>
                    <div className="arrow">
                        <img src="https://template.hasthemes.com/edule/eduLe/assets/images/shape/shape-7.png" alt="" />
                    </div>
                </div>

            </div>
            <Container>

            </Container>
        </div>

    )
}