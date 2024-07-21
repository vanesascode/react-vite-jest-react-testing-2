import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

const title = "title";
const url = "https://one-punch.com/";
const alt = "title";

describe("<GifItem /> tests", () => {
  it("should render correctly", () => {
    const { container } = render(<GifItem title={title} url={url} id="id" />);
    expect(container).toMatchSnapshot();
  });

  it("should show the image with the URL and the ALT indicated", () => {
    render(<GifItem title={title} url={url} id="id" />);

    // screen.debug();

    // console.log(screen.getByRole("img").url);
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(alt);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  it("should show the title in the component", () => {
    render(<GifItem title={title} url={url} id="id" />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
