import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import MyCourses from './MyCourses';
import FilterBar from './FilterBar';

export default function ThumnailList(){
    return (
        <Container>
            <FilterBar />
            <Row>
                <Col lg={4} md={6}><MyCourses /></Col>
                <Col lg={4} md={6}><MyCourses /></Col>
                <Col lg={4} md={6}><MyCourses /></Col>
            </Row>
        </Container>
    )
}