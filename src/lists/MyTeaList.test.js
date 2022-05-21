/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import MyTeaList from "./MyTeaList";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <MyTeaList />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <MyTeaList />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
