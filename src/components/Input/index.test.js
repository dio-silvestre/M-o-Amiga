import React from "react";
import Input from "./index";

import { render, waitFor, fireEvent } from "@testing-library/react";

describe("Testing Input", () => {
  it("should add new input when form has been submitted", async () => {
    const { getByTestId } = render(<Input register={() => {}} />);
    const fieldActionNode = await waitFor(() => getByTestId("input-field"));
    const newTesting = "testing";
    fireEvent.change(fieldActionNode, { target: { value: newTesting } });
    expect(fieldActionNode.value).toEqual(newTesting);
  });
});
