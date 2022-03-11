/** @format */

import { Col, Card, Button } from "react-bootstrap";

const TeaCard = ({ id, title, brand, img_url, description }) => {
  return (
    <Col>
      <Card id={id}>
        <Card.Img variant="top" src={img_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{brand}</Card.Text>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <>
            <Button size="sm" variant="primary">
              MyTea
            </Button>
            <Button size="sm" variant="primary">
              WishList
            </Button>
          </>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeaCard;
