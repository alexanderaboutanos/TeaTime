/** @format */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpoonacularApi from "../api/spoonacular.api";
import SearchTea from "../teaForms/SearchTea";
import LoadingSpinner from "../common/LoadingSpinner";
import TeaCardList from "../tea/TeaCardList";
import TeaTimeApi from "../api/teaTime.api";

const DiscoverTeaList = () => {
  console.debug("DiscoverTeaList");
  const navigate = useNavigate();
  const [teas, setTeas] = useState(null);

  /** Triggered by search form submit; reloads teas. */
  async function search(query) {
    console.debug("DiscoverTeaList, search: ", query);
    const res = await SpoonacularApi.searchAllTeas(query["search"]);
    console.debug("DiscoverTeaList, res: ", res);
    setTeas(res);
  }

  useEffect(() => {
    search({ search: "tea" });
  }, []);

  async function handleAddToWishList(id) {
    console.debug("handleAddToWishList", id);
    const tea = teas.filter((t) => t.id === id);
    const targetTea = tea[0];
    delete targetTea.id;
    await TeaTimeApi.createNewTeaAndAddToWishList(targetTea);
    alert("added to wishlist!");
    navigate("/wish-list", { replace: true });
  }

  async function handleAddToMyTeas(id) {
    console.log("handleAddToMyTeas", id);
    const tea = teas.filter((t) => t.id === id);
    const targetTea = tea[0];
    delete targetTea.id;
    await TeaTimeApi.createNewTeaAndAddToMyTeas(targetTea);
    alert("added to my teas!");
    navigate("/my-teas", { replace: true });
  }

  if (!teas) return <LoadingSpinner />;

  return (
    <div className="DiscoverTeaList col-md-8 offset-md-2">
      <h3>Discover new teas!</h3>
      <SearchTea search={search} />
      {teas.length ? (
        <TeaCardList
          teas={teas}
          btn1={handleAddToWishList}
          btn2={handleAddToMyTeas}
          origin={"DiscoverTeaList"}
        />
      ) : (
        <p className="lead">I'm sorry, your search appears inconclusive!</p>
      )}
    </div>
  );
};

export default DiscoverTeaList;

// const fakeArrData = [
//   {
//     id: 740259,
//     title:
//       "Tea Sampler - Fruit Tea - Antioxidants Tea - Rooibos Tea - 100% Natural - Decaffeinated - Blueberry Tea - Peach Tea - Raspberry Tea - Loose Leaf Tea",
//     brand: "Chinese Tea Culture",
//     description:
//       "Tea Sampler - Fruit Tea - Antioxidants Tea - Rooibos Tea - 100% Natural - Decaffeinated - Blueberry Tea - Peach Tea - Raspberry Tea - Loose Leaf Tea",
//     img_url: "https://spoonacular.com/productImages/740259-312x231.jpeg",
//   },
//   {
//     id: 1539729,
//     title:
//       "Tea Forte Lotus Relaxing Teas Presentation Box Tea Sampler Gift Set, 20 Assorted Variety Handcrafted Pyramid Tea Infuser Bags, Black Tea, Green Tea, Oolong Tea, White Tea, Herbal Tea",
//     brand: "Tea Forte",
//     description:
//       "LOTUS COLLECTION, a curated assortment of five relaxing hot teas for mind, body & spirit - a unique and unprecedented gourmet collection of highest-grade, small-lot, certified organic teas: Vanilla Pear, Orange Jasmine, Mountain Oolong, Darjeeling Quince, Lemon Lavender DIVERSE, SUBTLE FLAVORS from only the finest whole tea leaves in the world, blended with aromatic fruits, flowers and herbs DELIGHTFUL TEA GIFT SET offers a variety of premium gourmet teas, a most welcomed hostess gift or gift for tea lovers PRESENTATION BOX tea sampler has 20 assorted pyramid tea bag infusers, handcrafted to allow the delicate leaves to luxuriantly unfurl in hot water, producing a deliciously aromatic, flavorful cup WRAPPED IN ELEGANT, embossed pattern gift box with a satin ribbon, open the lid to reveal a tea tasting menu with blend descriptions",
//     img_url: "https://spoonacular.com/productImages/1539729-312x231.jpeg",
//   },
// ];
