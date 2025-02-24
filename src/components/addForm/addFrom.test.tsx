import { render, screen, fireEvent } from "@testing-library/react";
import AddForm from "./index";

describe("AddForm", () => {
  const testText = "Nueva frase";
  const onAddPhrase = jest.fn();

  beforeEach(() => {
    render(<AddForm onAddPhrase={onAddPhrase} />);
  });

  it("should render the AddForm", () => {
    expect(screen.getByLabelText(/Ingrese una frase/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Agregar/i })).toBeInTheDocument();
  });

  it("should call onAddPhrase with the input value when the form is submitted", () => {
    const input = screen.getByLabelText(/Ingrese una frase/i);
    const button = screen.getByRole("button", { name: /Agregar/i });

    fireEvent.change(input, { target: { value: testText } });
    fireEvent.click(button);

    expect(onAddPhrase).toHaveBeenCalledWith(testText);
    expect(input).toHaveValue("");
  });
});
