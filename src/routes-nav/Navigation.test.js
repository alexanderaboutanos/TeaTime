/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider currentUser={null}>
        <Navigation />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("includes proper links when logged out", function () {
  const { queryByText } = render(
    <MemoryRouter>
      <UserProvider currentUser={null}>
        <Navigation />
      </UserProvider>
    </MemoryRouter>
  );

  // we should see the homepage
  const link1 = queryByText("TeaTime");
  expect(link1).toBeInTheDocument();

  // we should see the login, the signup, and help.
  const link2 = queryByText("Login");
  const link3 = queryByText("Signup");
  const link4 = queryByText("Help");
  expect(link2).toBeInTheDocument();
  expect(link3).toBeInTheDocument();
  expect(link4).toBeInTheDocument();

  // we should NOT see the rest of the links.
  const link5 = queryByText("My Teas");
  const link6 = queryByText("Wishlist");
  const link7 = queryByText("Discover");
  const link8 = queryByText("Profile");
  const link9 = queryByText("Logout");
  expect(link5).not.toBeInTheDocument();
  expect(link6).not.toBeInTheDocument();
  expect(link7).not.toBeInTheDocument();
  expect(link8).not.toBeInTheDocument();
  expect(link9).not.toBeInTheDocument();
});

it("includes proper links when logged in", function () {
  const { queryByText } = render(
    <MemoryRouter>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </MemoryRouter>
  );

  // we should see the homepage
  const link1 = queryByText("TeaTime");
  expect(link1).toBeInTheDocument();

  // we should NOT see the login, the signup
  const link2 = queryByText("Login");
  const link3 = queryByText("Signup");
  expect(link2).not.toBeInTheDocument();
  expect(link3).not.toBeInTheDocument();

  // we should see the rest of the links.
  const link4 = queryByText("Help");
  const link5 = queryByText("My Teas");
  const link6 = queryByText("Wishlist");
  const link7 = queryByText("Discover");
  const link8 = queryByText("Profile");
  const link9 = queryByText("Logout");
  expect(link4).toBeInTheDocument();
  expect(link5).toBeInTheDocument();
  expect(link6).toBeInTheDocument();
  expect(link7).toBeInTheDocument();
  expect(link8).toBeInTheDocument();
  expect(link9).toBeInTheDocument();
});
