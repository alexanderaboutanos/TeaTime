/** @format */

import { Row } from "react-bootstrap";
import TeaCard from "../tea/TeaCard";

const TeaCardList = ({ teas, fromSpoonDb }) => {
  console.log(teas);
  return (
    <Row xs={1} md={4} className="TeaCardList g-4">
      {teas.map((tea) => (
        <TeaCard
          key={tea.id}
          id={tea.id}
          title={tea.title}
          brand={tea.brand}
          img_url={tea.img_url || tea.image}
          description={tea.description}
          fromSpoonDb={fromSpoonDb}
        />
      ))}
    </Row>
  );
};

export default TeaCardList;
