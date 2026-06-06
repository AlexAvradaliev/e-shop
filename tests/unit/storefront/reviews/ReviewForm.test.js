import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReviewForm from "@/components/storefront/reviews/ReviewForm.js";

describe("ReviewForm", () => {
  it("submits review", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<ReviewForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText("Name"), "Marie");
    await user.selectOptions(screen.getByLabelText("Rating"), "4");
    await user.type(screen.getByLabelText("Comment"), "Good product.");
    await user.click(screen.getByRole("button", { name: "Submit review" }));

    expect(onSubmit).toHaveBeenCalledWith({
      author: "Marie",
      rating: 4,
      comment: "Good product.",
    });
  });

  it("works with default submit handler", async () => {
    const user = userEvent.setup();

    render(<ReviewForm />);

    await user.click(screen.getByRole("button", { name: "Submit review" }));

    expect(screen.getByRole("button", { name: "Submit review" })).toBeInTheDocument();
  });
});
