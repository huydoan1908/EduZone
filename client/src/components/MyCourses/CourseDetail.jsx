import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './CourseDetail.scss';
export default function CourseDetail() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="course-video">
              <iframe src="https://www.youtube.com/embed/_CL6n0FJZpk"></iframe>
              <span className="course-tag">Tag</span>
            </div>
            <h2 className="course-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              aliquam doloribus ratione debitis illum recusandae magnam ipsam
              nostrum? Dolorum iusto quaerat illum mollitia.{" "}
            </h2>
            <div className="details-teacher">
              <div className="author"></div>
              <div className="author-rating"></div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
