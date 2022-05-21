/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import TeaCard from "./TeaCard";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <TeaCard />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <TeaCard />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
