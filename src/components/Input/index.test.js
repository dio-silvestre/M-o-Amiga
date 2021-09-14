import React from "react";
import ActionRegister from "./index";

import { render, waitFor, fireEvent } from "@testing-library/react";

describe("Test for Action register", () => {
  it("should add new input when form has been submitted", async () => {
    //renderizar o componente
    const { getByTestId } = render(<ActionRegister />);

    //buscar o input
    const fieldActionNode = await waitFor(() => getByTestId("input-field"));

    // console.log(fieldActionNode);
    const newTesting = "testing";
    fireEvent.change(fieldActionNode, { target: { value: newTesting } });

    //digitar no input
    expect(fieldActionNode.value).toEqual(newTesting);
  });
});
