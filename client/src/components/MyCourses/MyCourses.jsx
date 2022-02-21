import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyCourses.scss';
export default function Thumbnail() {
    return (
        <div className="thumbnail">
            <Link to="#">
                <div className="thumbnail-img">
                    <img
                        src="https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-01.jpg"
                        alt="Thumbnail Image"
                    />
                </div>
            </Link>
            <div className="thumbnail-content">
                <div className="teacher-info">
                    <div className="avatar">
                        <Link to="#">
                            <img
                                src="https://template.hasthemes.com/edule/eduLe/assets/images/author/author-01.jpg"
                                alt="Teacher Avatar"
                                className="rounded-circle"
                            />
                        </Link>
                    </div>
                    <Link to="#">Jason William</Link>
                </div>
                <Link to="#"><h5>Data Science and Machine Learning with Python - Hands On!</h5></Link>
                <p className="my-3">38% Complete</p>
                <ProgressBar now={38} variant="success" />
            </div>
        </div>
    )
}