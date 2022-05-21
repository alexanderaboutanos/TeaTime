/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { fakeTeas } from "../testUtils";
import TeaCardList from "./TeaCardList";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <TeaCardList teas={fakeTeas} />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <TeaCardList teas={fakeTeas} w />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
