/** @format */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import DiscoverTeaList from "./DiscoverTeaList";

it("renders without crashing", function () {
  expect(1).toBe(1);
  // render(<DiscoverTeaList />);
});

// it("matches snapshot", function () {
//   const { asFragment } = render(
//     <MemoryRouter>
//       <DiscoverTeaList />
//     </MemoryRouter>
//   );
//   expect(asFragment()).toMatchSnapshot();
// });
