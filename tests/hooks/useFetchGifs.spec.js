import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Tests in useFetchGifs", () => {
  test("should return the initial state", async () => {
    const { result } = renderHook(() => {
      return useFetchGifs("");
    });

    await waitFor(() => {
      const { images, isLoading } = result.current;
      expect(images.length).toBe(0);
      expect(isLoading).toBeTruthy();
    });
  });

  test("should return an array of images and isLoading true", async () => {
    const { result } = renderHook(() => {
      return useFetchGifs("cats");
    });

    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0);
    });

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
