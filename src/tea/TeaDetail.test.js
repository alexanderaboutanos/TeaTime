/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import TeaDetail from "./TeaDetail";

const fakeTea = {
  id: 740259,
  title:
    "Tea Sampler - Fruit Tea - Antioxidants Tea - Rooibos Tea - 100% Natural - Decaffeinated - Blueberry Tea - Peach Tea - Raspberry Tea - Loose Leaf Tea",
  brand: "Chinese Tea Culture",
  description:
    "Tea Sampler - Fruit Tea - Antioxidants Tea - Rooibos Tea - 100% Natural - Decaffeinated - Blueberry Tea - Peach Tea - Raspberry Tea - Loose Leaf Tea",
  img_url: "https://spoonacular.com/productImages/740259-312x231.jpeg",
};

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <TeaDetail />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <TeaDetail />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
