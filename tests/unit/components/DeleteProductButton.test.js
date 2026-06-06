import React from "react";
import { render, screen } from "@testing-library/react";
import DeleteProductButton from "@/app/admin/products/DeleteProductButton";

describe("DeleteProductButton", () => {
  it("renders delete button", () => {
    render(
      React.createElement(
        DeleteProductButton,
        { productId: "1" }
      )
    );

    expect(
      screen.getByRole("button")
    ).toBeInTheDocument();
  });
});