import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./index";

describe("SearchBar", () => {
  const testText = "Nueva frase";
  const onSearch = jest.fn();

  beforeEach(() => {
    render(<SearchBar onSearch={onSearch} />);
  });

  it("should render the SearchBar", () => {
    expect(screen.getByLabelText(/Buscar frase/i)).toBeInTheDocument();
  });

  it("should call onSearch when typing", () => {
    fireEvent.change(screen.getByLabelText(/Buscar frase/i), { target: { value: testText } });
    expect(onSearch).toHaveBeenCalledWith(testText);
  });
});
