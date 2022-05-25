/** @format */

import React from "react";
import { render } from "@testing-library/react";
import HelpPage from "./HelpPage";

it("renders without crashing", function () {
  render(<HelpPage />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<HelpPage />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders the header]", function () {
  const { getByText } = render(<HelpPage />);

  // renders header
  const h2 = getByText("TeaTime Help Page");
  expect(h2).toBeInTheDocument();
});

it("renders the image", function () {
  const { getByAltText } = render(<HelpPage />);

  // renders image
  const img = getByAltText("coffee mug");
  expect(img).toBeInTheDocument();
});

it("renders all 5 subheaders", function () {
  const { getByText } = render(<HelpPage />);

  // renders subheaders
  const subheader1 = getByText("What is TeaTime?");
  const subheader2 = getByText("Getting Started");
  const subheader3 = getByText("Track Your Teas");
  const subheader4 = getByText("Finding New Teas");
  const subheader5 = getByText("The Wishlist");
  const subheader6 = getByText("About the Developer");
  expect(subheader1).toBeInTheDocument();
  expect(subheader2).toBeInTheDocument();
  expect(subheader3).toBeInTheDocument();
  expect(subheader4).toBeInTheDocument();
  expect(subheader5).toBeInTheDocument();
  expect(subheader6).toBeInTheDocument();
});
