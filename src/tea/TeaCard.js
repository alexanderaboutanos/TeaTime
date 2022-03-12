/** @format */

import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./TeaCard.css";

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

  const navigate = useNavigate();

  function handleClick(id) {
    if (origin !== "DiscoverTeaList") navigate(`/tea/${id}`, { replace: true });
  }

  return (
    <Col>
      <Card id={id} className="h-100">
        <Card.Img
          style={{ cursor: origin !== "DiscoverTeaList" ? "pointer" : null }}
          onClick={() => handleClick(id)}
          variant="top"
          src={img_url}
        />
        <Card.Body
          style={{ cursor: origin !== "DiscoverTeaList" ? "pointer" : null }}
          className="bg-light"
          onClick={() => handleClick(id)}
        >
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text>{brand}</Card.Text>
          <Card.Text className="crop-text-2">{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => btn1(id)} size="sm" variant="primary">
            {btn1Txt}
          </Button>
          <Button onClick={() => btn2(id)} size="sm" variant="primary">
            {btn2Txt}
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default TeaCard;
