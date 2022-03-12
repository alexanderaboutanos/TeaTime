/** @format */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import TeaTimeApi from "../api/teaTime.api";
import LoadingSpinner from "../common/LoadingSpinner";

const TeaDetail = () => {
  const { id } = useParams();
  const [tea, setTea] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    async function loadTeaDetailsOnMount() {
      const res = await TeaTimeApi.getTeaInfo(id);
      setTea(res);
      setDataLoaded(true);
    }
    loadTeaDetailsOnMount();
  }, []);

  if (!dataLoaded) return <LoadingSpinner></LoadingSpinner>;

  return (
    <Card className="text-center">
      <Card.Header className="text-muted">Tea Details</Card.Header>
      <Card.Body>
        <Card.Title>
          <h1>{tea.title}</h1>
        </Card.Title>
        <Card.Img roundedCircle={true} src={tea.img_url}></Card.Img>
        <Card.Text>
          <b>Brand:</b> {tea.brand}
        </Card.Text>
        <Card.Text>
          <b>Description:</b> {tea.description}
        </Card.Text>
        <Card.Text>
          <b>Category:</b> {tea.category || "N/A"}
        </Card.Text>
        <Card.Text>
          <b>Review:</b> {tea.review || "N/A"}
        </Card.Text>
        <Card.Text>
          <b>Country of Origin:</b> {tea.country_of_origin || "unknown"}
        </Card.Text>
        <Card.Text>
          <b>Organic:</b> {tea.organic ? "yes" : "no"}
        </Card.Text>
        <Card.Text>
          <b>Brew Time (in minutes):</b> {tea.brew_time || "unknown"}
        </Card.Text>
        <Card.Text>
          <b>Brew Temp (°F):</b> {tea.brew_temp || "unknown"}
        </Card.Text>
        <Button href={`/tea/edit/${tea.id}`} variant="primary">
          Edit
        </Button>
        <Button href="/my-teas" variant="primary">
          MyTeas
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">...</Card.Footer>
    </Card>
  );
};

export default TeaDetail;
