import { fireEvent, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Tests in <GifGrid/>", () => {
  const category = "cats";

  test("should show the loading first", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();

    expect(screen.getByText("Cargando...")).toBeTruthy();
  });

  test("should show items when images are loaded", async () => {
    const gifs = [
      {
        id: "ABC",
        title: "Cats",
        url: "https://one-punch.com/",
      },
      {
        id: "123",
        title: "Cats",
        url: "https://one-punch.com/",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    // screen.debug();

    const images = await screen.findAllByRole("img");
    expect(images.length).toBe(2);
  });
});
