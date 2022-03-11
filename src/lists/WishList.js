/** @format */

import { useState, useContext, useEffect } from "react";
import TeaTimeApi from "../api/teaTime.api";
import LoadingSpinner from "../common/LoadingSpinner";
import TeaCardList from "../tea/TeaCardList";
import UserContext from "../auth/UserContext";

const WishList = () => {
  console.debug("WishList");
  const { addToMyTeas, deleteTea } = useContext(UserContext);
  const [teas, setTeas] = useState(null);

  async function getWishList() {
    console.debug("WishList getWishList");
    const wishList = await TeaTimeApi.getWishList();
    setTeas(wishList);
    console.log(wishList);
  }

  useEffect(() => {
    getWishList();
  }, []);

  async function handleAddToMyTeas(id) {
    await addToMyTeas(id);
    getWishList();
  }

  async function handleDeleteTea(id) {
    await deleteTea(id);
    getWishList();
  }

  if (!teas) return <LoadingSpinner />;

  return (
    <div className="WishList col-md-8 offset-md-2">
      <h3>Wish List</h3>
      {teas.length ? (
        <TeaCardList
          teas={teas}
          btn1={handleAddToMyTeas}
          btn2={handleDeleteTea}
          origin={"WishList"}
        />
      ) : (
        <p className="lead">Your wish list appears to be empty!</p>
      )}
    </div>
  );
};

export default WishList;
