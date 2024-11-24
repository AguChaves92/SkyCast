import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CityCard from "./index";
import { MockCity } from "../../../mockData";
import { getIcon } from "./controller";

describe("cityCards", () => {
  beforeEach(() => {
    render(<CityCard city={MockCity} />);
  });

  test("should display the city name", () => {
    expect(screen.getByText("Madrid")).toBeDefined();
  });
  test("temperature is displayed correctly", () => {
    expect(screen.findAllByText("12.6")).toBeDefined();
    expect(screen.findAllByText("°C")).toBeDefined();
  });
  test("min temperature is displayed correctly", () => {
    expect(screen.findAllByText("11.9")).toBeDefined();
    expect(screen.findAllByText("°C")).toBeDefined();
  });
  test("max temperature is displayed correctly", () => {
    expect(screen.findAllByText("14.7")).toBeDefined();
    expect(screen.findAllByText("°C")).toBeDefined();
  });

  test("get correct icon", () => {
    const id = MockCity.weather.id;
    expect(getIcon(id)).toBe("icons/partly-cloudy-day.svg");
  });
});
