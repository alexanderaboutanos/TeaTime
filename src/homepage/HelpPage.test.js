/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import HelpPage from "./HelpPage";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
  render(<HelpPage />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<HelpPage />);
  expect(asFragment()).toMatchSnapshot();
});
