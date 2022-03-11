/** @format */

import { useState, useEffect, useContext } from "react";
import TeaTimeApi from "../api/teaTime.api";
import LoadingSpinner from "../common/LoadingSpinner";
import TeaCardList from "../tea/TeaCardList";
import UserContext from "../auth/UserContext";

const MyTeaList = () => {
  console.debug("MyTeaList");
  const { addToWishList, deleteTea } = useContext(UserContext);
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
    await addToWishList(id);
    getMyTeas();
  }

  async function handleDeleteTea(id) {
    await deleteTea(id);
    getMyTeas();
  }

  if (!teas) return <LoadingSpinner />;

  return (
    <div className="MyTeaList col-md-8 offset-md-2">
      <h3>My Tea List</h3>
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
