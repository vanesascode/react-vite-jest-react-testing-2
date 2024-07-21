import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

const onNewCategory = jest.fn();

describe("Tests in <AddCategory/>", () => {
  beforeEach(() => {
    onNewCategory.mockReset();
  });

  test("should change the value of the input", () => {
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });

  test("should call onNewCategory if input has a value", () => {
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");

    // "form" is found thanks to the aria-label:
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "test" } });

    // want to see if really the value of the input is "test"? run: screen.debug();

    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith("test");
  });

  test("should not call onNewCategory if input is empty", () => {
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
