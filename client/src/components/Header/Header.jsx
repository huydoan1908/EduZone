import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar expand="lg" bg="white" fixed="top" className="p-3 shadow-sm">
            <Container>
                <Navbar.Brand href="/" className="text-uppercase fw-bold">Edu<span className='color-primary'>Zone</span></Navbar.Brand>
                <Nav className="mx-auto d-none d-lg-flex">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/courses">All Course</Nav.Link>
                    <NavDropdown title="Pages" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/1">Action</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/2">Another action</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="d-none d-lg-flex">
                    <Nav.Link as={NavLink} to="/signUp">Sign Up</Nav.Link>
                    <Nav.Link as={NavLink} to="/signUp" className="btn-invert px-4 py-2 align-self-center">Sign In</Nav.Link>
                </Nav>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link as={NavLink} to="/courses">All Course</Nav.Link>
                            <NavDropdown.Divider />
                            <NavDropdown title="Pages" id="collasible-nav-dropdown" className='rounded-0'>
                                <NavDropdown.Item as={NavLink} to="/1">Action</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/2">Another action</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to="/4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="d-flex flex-row justify-content-evenly m-3">
                            <Nav.Link as={NavLink} to="/signUp">Sign Up</Nav.Link>
                            <Nav.Link as={NavLink} to="/signUp" className="btn-invert px-3 py-2 align-self-center">Sign In</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}