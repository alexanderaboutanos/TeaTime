/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Homepage from "./Homepage";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <UserProvider>
        <Homepage />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <Homepage />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider currentUser={null}>
        <Homepage />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders the proper homepage when logged out", function () {
  const { getByText, queryByText } = render(
    <MemoryRouter>
      <UserProvider currentUser={null}>
        <Homepage />
      </UserProvider>
    </MemoryRouter>
  );

  // renders title and subtitle
  const h1 = getByText("TeaTime");
  const subtitle = getByText("All the teas in one, convenient place.");
  expect(h1).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();

  // renders login and signup button
  const loginBtn = getByText("Log in");
  const signupBtn = getByText("Sign up");
  expect(loginBtn).toBeInTheDocument();
  expect(signupBtn).toBeInTheDocument();

  // should not render the welcome message
  const welcomeMsg = queryByText("Welcome back,", { exact: false });
  expect(welcomeMsg).not.toBeInTheDocument();
});

it("renders the proper homepage when logged in", function () {
  const { getByText, queryByText } = render(
    <MemoryRouter>
      <UserProvider>
        <Homepage />
      </UserProvider>
    </MemoryRouter>
  );

  // renders title and subtitle
  const h1 = getByText("TeaTime");
  const subtitle = getByText("All the teas in one, convenient place.");
  expect(h1).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();

  // does not render login and signup button
  const loginBtn = queryByText("Log in");
  const signupBtn = queryByText("Sign up");
  expect(loginBtn).not.toBeInTheDocument();
  expect(signupBtn).not.toBeInTheDocument();

  // should render the welcome message
  const welcomeMsg = queryByText("Welcome back,", { exact: false });
  expect(welcomeMsg).toBeInTheDocument();
});
