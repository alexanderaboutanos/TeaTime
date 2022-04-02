/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { UserProvider } from "../testUtils";
import Profile from "../profile/Profile";
import RequireAuth from "./RequireAuth";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <UserProvider>
        <RequireAuth>
          <Profile />
        </RequireAuth>
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <RequireAuth>
          <Profile />
        </RequireAuth>
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
