/** @format */

import { Col, Card, Button } from "react-bootstrap";

const TeaCard = ({
  id,
  title,
  brand,
  img_url,
  description,
  origin,
  btn1,
  btn2,
}) => {
  let btn1Txt;
  let btn2Txt;
  if (origin === "DiscoverTeaList") {
    btn1Txt = "+ wish list";
    btn2Txt = "+ my teas";
  }
  if (origin === "MyTeaList") {
    btn1Txt = "+ wish list";
    btn2Txt = "delete tea";
  }
  if (origin === "WishList") {
    btn1Txt = "+ my teas";
    btn2Txt = "delete tea";
  }

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
            <Button onClick={() => btn1(id)} size="sm" variant="primary">
              {btn1Txt}
            </Button>
            <Button onClick={() => btn2(id)} size="sm" variant="primary">
              {btn2Txt}
            </Button>
          </>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeaCard;
