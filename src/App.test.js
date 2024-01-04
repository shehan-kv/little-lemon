import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});

describe("Header", () => {
  test("renders Header component", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});

describe("Main", () => {
  test("renders Main component", () => {
    render(<Main />);
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  test("renders Footer component", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
