/** @format */

import { useState, useEffect } from "react";
import TeaTimeApi from "../api/teaTime.api";
import LoadingSpinner from "../common/LoadingSpinner";
import TeaCardList from "../tea/TeaCardList";

const MyTeaList = () => {
  console.debug("MyTeaList");

  const [teas, setTeas] = useState(null);

  useEffect(() => {
    async function getMyTeasOnMount() {
      console.debug("MyTeaList useEffect getMyTeasOnMount");
      const myTeas = await TeaTimeApi.getMyTeas();
      setTeas(myTeas);
      console.log(myTeas);
    }
    getMyTeasOnMount();
  }, []);

  if (!teas) return <LoadingSpinner />;

  return (
    <div className="MyTeaList col-md-8 offset-md-2">
      <h3>My Tea List</h3>
      {teas.length ? (
        <TeaCardList teas={teas} />
      ) : (
        <p className="lead">I'm sorry, you appear to have no saved tea!</p>
      )}
    </div>
  );
};

export default MyTeaList;
