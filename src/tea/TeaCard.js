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
    btn1Txt = "move to wishlist";
    btn2Txt = "move to my collection";
  }
  if (origin === "MyTeaList") {
    btn1Txt = "move to wishlist";
    btn2Txt = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    );
  }
  if (origin === "WishList") {
    btn1Txt = "move to my collection";
    btn2Txt = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    );
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
          <Button
            style={{ margin: "3px" }}
            onClick={() => btn1(id)}
            size="sm"
            variant="primary"
          >
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
