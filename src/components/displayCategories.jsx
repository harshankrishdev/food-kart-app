import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import categories from "./Categore";
import "./Categore.css";

function Categories() {
  return (
    <div className="recent-products-container container mx-auto pb-4 w-2/3 text-white">
      <h1>CATEGORIES</h1>
      <Row className="list">
        {categories.map((category) => (
          <LinkContainer to={"/menu"}>
            <Col md={3}>
              <div className="category-tile">{category.name}</div>
            </Col>
          </LinkContainer>
        ))}
      </Row>
    </div>
  );
}

export default Categories;
