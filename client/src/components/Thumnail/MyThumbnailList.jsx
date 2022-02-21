import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import MyThumbnail from './MyThumbnail';

export default function ThumnailList(){
    return (
        <Container>
            <Row>
                <Col><MyThumbnail /></Col>
                <Col><MyThumbnail /></Col>
                <Col><MyThumbnail /></Col>
            </Row>
        </Container>
    )
}