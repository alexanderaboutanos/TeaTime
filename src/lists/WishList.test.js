/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import WishList from "./WishList";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <WishList />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <WishList />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
