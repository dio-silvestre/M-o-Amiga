import React from "react";
import Button from "./index";

import { render, waitFor, fireEvent } from "@testing-library/react";

describe("Testing button", () => {
  it("should check if the button runs right", async () => {
    const { getByTestId } = render(<Button />);
    const btnNode = await waitFor(() => getByTestId("form-btn"));
    fireEvent.click(btnNode);
  });
});
