import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Tests in <GifExpertApp />", () => {
  test("should match with snapshot", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test("Should render the title", () => {
    render(<GifExpertApp />);

    screen.debug();

    const title = screen.getByRole("heading", {
      level: 1,
      name: "GifExpertApp",
    });

    expect(title).toBeTruthy();
  });

  test("should add to the categories array when the form is submitted", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");

    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "test" } });

    fireEvent.submit(form);

    const cardGridElements = screen.getAllByTestId("grid");

    expect(cardGridElements.length).toBe(2);
  });
});
