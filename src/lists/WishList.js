/** @format */

import { useState, useEffect } from "react";
import TeaTimeApi from "../api/teaTime.api";
import LoadingSpinner from "../common/LoadingSpinner";
import TeaCardList from "../tea/TeaCardList";

const WishList = () => {
  console.debug("WishList");

  const [teas, setTeas] = useState(null);

  useEffect(() => {
    async function getWishListOnMount() {
      console.debug("WishList useEffect getWishListOnMount");
      const wishList = await TeaTimeApi.getWishList();
      setTeas(wishList);
      console.log(wishList);
    }
    getWishListOnMount();
  }, []);

  if (!teas) return <LoadingSpinner />;

  return (
    <div className="WishList col-md-8 offset-md-2">
      <h3>Wish List</h3>
      {teas.length ? (
        <TeaCardList teas={teas} fromSpoonDb={false} />
      ) : (
        <p className="lead">Your wish list appears to be empty!</p>
      )}
    </div>
  );
};

export default WishList;
