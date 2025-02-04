import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./index";

describe("SearchBar", () => {
  const testText = "Nueva frase";

  it("should render the search bar", () => {
    render(<SearchBar onSearch={jest.fn()} />);
    expect(screen.getByLabelText(/Buscar frase/i)).toBeInTheDocument();
  });

  it("should call onSearch when typing", () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);
    fireEvent.change(screen.getByLabelText(/Buscar frase/i), { target: { value: testText } });
    expect(onSearch).toHaveBeenCalledWith(testText);
  });
});
