/** @format */

import { useState, useEffect, useContext } from "react";
import SpoonacularApi from "../api/spoonacular.api";
import SearchTea from "../teaForms/SearchTea";
import LoadingSpinner from "../common/LoadingSpinner";
import TeaCardList from "../tea/TeaCardList";
import UserContext from "../auth/UserContext";

const DiscoverTeaList = () => {
  console.debug("DiscoverTeaList");
  const { addToWishList, addToMyTeas } = useContext(UserContext);

  const [teas, setTeas] = useState(null);

  useEffect(() => {
    async function getSpoonTeasOnMount() {
      console.debug("DiscoverTeaList useEffect getSpoonTeasOnMount");
      search("tea");
    }
    getSpoonTeasOnMount();
  }, []);

  /** Triggered by search form submit; reloads teas. */
  async function search(query) {
    const SpoonTeas = await SpoonacularApi.searchAllTeas(query);
    console.debug("Spoon search (pre-filter): ", SpoonTeas);
    const filteredTeas = SpoonTeas.products.filter((i) => {
      return i.aisle === "Tea and Coffee";
    });
    console.debug("Spoon search (post-filter): ", filteredTeas);
    setTeas(filteredTeas);
  }

  async function handleAddToWishList(id) {
    addToWishList(id);
    alert("added to wish list!");
  }

  async function handleAddToMyTeas(id) {
    addToMyTeas(id);
    alert("added to my teas!");
  }

  // The following object keys need to be changed...
  // "title" --> "title"
  // "brand" --> "brand"
  // "description --> description"
  // "image" --> img_url

  if (!teas) return <LoadingSpinner />;

  return (
    <div className="DiscoverTeaList col-md-8 offset-md-2">
      <h3>Discover new teas!</h3>
      <SearchTea searchFor={search} />
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
