/** @format */

import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
  username: "testuser1",
  first_name: "Test",
  last_name: "User",
};

const UserProvider = ({ children, currentUser = demoUser }) => (
  <UserContext.Provider value={{ currentUser }}>
    {children}
  </UserContext.Provider>
);

const fakeTeas = [
  {
    id: 740259,
    title:
      "Tea Sampler - Fruit Tea - Antioxidants Tea - Rooibos Tea - 100% Natural - Decaffeinated - Blueberry Tea - Peach Tea - Raspberry Tea - Loose Leaf Tea",
    brand: "Chinese Tea Culture",
    description:
      "Tea Sampler - Fruit Tea - Antioxidants Tea - Rooibos Tea - 100% Natural - Decaffeinated - Blueberry Tea - Peach Tea - Raspberry Tea - Loose Leaf Tea",
    img_url: "https://spoonacular.com/productImages/740259-312x231.jpeg",
  },
  {
    id: 1539729,
    title:
      "Tea Forte Lotus Relaxing Teas Presentation Box Tea Sampler Gift Set, 20 Assorted Variety Handcrafted Pyramid Tea Infuser Bags, Black Tea, Green Tea, Oolong Tea, White Tea, Herbal Tea",
    brand: "Tea Forte",
    description:
      "LOTUS COLLECTION, a curated assortment of five relaxing hot teas for mind, body & spirit - a unique and unprecedented gourmet collection of highest-grade, small-lot, certified organic teas: Vanilla Pear, Orange Jasmine, Mountain Oolong, Darjeeling Quince, Lemon Lavender DIVERSE, SUBTLE FLAVORS from only the finest whole tea leaves in the world, blended with aromatic fruits, flowers and herbs DELIGHTFUL TEA GIFT SET offers a variety of premium gourmet teas, a most welcomed hostess gift or gift for tea lovers PRESENTATION BOX tea sampler has 20 assorted pyramid tea bag infusers, handcrafted to allow the delicate leaves to luxuriantly unfurl in hot water, producing a deliciously aromatic, flavorful cup WRAPPED IN ELEGANT, embossed pattern gift box with a satin ribbon, open the lid to reveal a tea tasting menu with blend descriptions",
    img_url: "https://spoonacular.com/productImages/1539729-312x231.jpeg",
  },
];

export { UserProvider, fakeTeas };
