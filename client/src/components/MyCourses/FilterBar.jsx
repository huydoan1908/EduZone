import React from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    FormControl
} from "react-bootstrap";
export default function FilterBar() {
    const [active, setActive] = React.useState("all");
    function HandleClick(e){
        setActive(e.target.name);
    }
    return (
        <div className="filter-bar">
            <Col xs={12} lg={{ span: 3, offset: 1 }}>
                <div className="search-bar">
                    <FormControl
                        type="text"
                        placeholder="Search"
                    />
                    <button className="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </Col>
            <Col xs={12} lg={8}>
                <div className="nav-group">
                    <Col lg={3} xs={6}>
                        <Link to="#"
                            className={`btn-invert ${active == "all" ? "active" : ""}`}
                            name="all"
                            onClick={HandleClick}>All Courses</Link>
                    </Col>
                    <Col lg={3} xs={6}>
                        <Link to="#"
                            className={`btn-invert ${active == "collection" ? "active" : ""}`}
                            name="collection"
                            onClick={HandleClick}>Collection</Link>
                    </Col>
                    <Col lg={3} xs={6}>
                        <Link to="#"
                            className={`btn-invert ${active == "wish" ? "active" : ""}`}
                            name="wish"
                            onClick={HandleClick}>Wishlist</Link>
                    </Col>
                    <Col lg={3} xs={6}>
                        <Link to="#"
                            className={`btn-invert ${active == "archived" ? "active" : ""}`}
                            name="archived"
                            onClick={HandleClick}>Archived</Link>
                    </Col>
                </div>
            </Col>
        </div>
    )
}