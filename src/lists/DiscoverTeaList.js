/** @format */

import { useState, useEffect } from "react";
import SpoonacularApi from "../api/spoonacular.api";
import SearchTea from "../teaForms/SearchTea";
import LoadingSpinner from "../common/LoadingSpinner";
import TeaCardList from "../tea/TeaCardList";

const DiscoverTeaList = () => {
  console.debug("DiscoverTeaList");

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
        <TeaCardList teas={teas} fromSpoonDb={true} />
      ) : (
        <p className="lead">I'm sorry, your search appears inconclusive!</p>
      )}
    </div>
  );
};

export default DiscoverTeaList;
