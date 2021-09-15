import React from "react";
import Input from "./index";

import { render, waitFor, fireEvent } from "@testing-library/react";

describe("Testing Input", () => {
  it("should add new input when form has been submitted", async () => {
    //renderizar o componente
    const { getByTestId } = render(<Input register={() => {}} />);

    //buscar o input
    const fieldActionNode = await waitFor(() => getByTestId("input-field"));

    // console.log(fieldActionNode);
    const newTesting = "testing";
    fireEvent.change(fieldActionNode, { target: { value: newTesting } });

    //digitar no input
    expect(fieldActionNode.value).toEqual(newTesting);
  });
});
