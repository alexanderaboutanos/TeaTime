/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AddTea from "./AddTea";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <AddTea />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <AddTea />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
