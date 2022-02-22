import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import MyCourses from './MyCourses';

export default function ThumnailList(){
    return (
        <Container>
            <Row>
                <Col lg={4} md={6}><MyCourses /></Col>
                <Col lg={4} md={6}><MyCourses /></Col>
                <Col lg={4} md={6}><MyCourses /></Col>
            </Row>
        </Container>
    )
}