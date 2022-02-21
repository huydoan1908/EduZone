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
                <Col><MyCourses /></Col>
                <Col><MyCourses /></Col>
                <Col><MyCourses /></Col>
            </Row>
        </Container>
    )
}