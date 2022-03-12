/** @format */

import { useState, useEffect } from "react";
import TeaTimeApi from "../api/teaTime.api";
import LoadingSpinner from "../common/LoadingSpinner";
import TeaCardList from "../tea/TeaCardList";
import { Button } from "react-bootstrap";

const MyTeaList = () => {
  console.debug("MyTeaList");
  const [teas, setTeas] = useState(null);

  async function getMyTeas() {
    console.debug("MyTeaList getMyTeas");
    const myTeas = await TeaTimeApi.getMyTeas();
    setTeas(myTeas);
    console.log(myTeas);
  }

  useEffect(() => {
    getMyTeas();
  }, []);

  async function handleAddToWishList(id) {
    console.debug("debug deleteTea, id: ", id);
    const res = await TeaTimeApi.moveFromMyTeasToWishList(id);
    console.debug("res", res);
    getMyTeas();
  }

  async function handleDeleteTea(id) {
    console.debug("debug deleteTea, id: ", id);
    const res = await TeaTimeApi.deleteTea(id);
    console.debug("res", res);
    getMyTeas();
  }

  if (!teas) return <LoadingSpinner />;

  return (
    <div className="MyTeaList col-md-8 offset-md-2">
      <h2 style={{ margin: "20px" }}>My Tea List</h2>
      <Button
        href="/tea/add"
        variant="outline-secondary"
        style={{ marginBottom: "20px" }}
      >
        Add New Tea
      </Button>
      {teas.length ? (
        <TeaCardList
          teas={teas}
          btn1={handleAddToWishList}
          btn2={handleDeleteTea}
          origin={"MyTeaList"}
        />
      ) : (
        <p className="lead">I'm sorry, you appear to have no saved tea!</p>
      )}
    </div>
  );
};

export default MyTeaList;
