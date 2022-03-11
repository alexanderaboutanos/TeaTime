/** @format */

import { useState, useEffect } from "react";
import TeaTimeApi from "../api/teaTime.api";
import LoadingSpinner from "../common/LoadingSpinner";
import TeaCardList from "../tea/TeaCardList";

const WishList = () => {
  console.debug("WishList");
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
    console.debug("debug deleteTea, id: ", id);
    const res = await TeaTimeApi.moveFromWishListToMyTeas(id);
    console.debug("res", res);
    getWishList();
  }

  async function handleDeleteTea(id) {
    console.debug("debug deleteTea, id: ", id);
    const res = await TeaTimeApi.deleteTea(id);
    console.debug("res", res);
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
