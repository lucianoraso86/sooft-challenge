import { render, screen, fireEvent } from "@testing-library/react";
import AddForm from "./index";

describe("AddForm", () => {
  const testText = "Nueva frase";

  it("should render the AddForm", () => {
    const onAddPhrase = jest.fn();
    render(<AddForm onAddPhrase={onAddPhrase} />);
    expect(screen.getByLabelText(/Ingrese una frase/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Agregar/i })).toBeInTheDocument();
  });

  it("should call onAddPhrase with the input value when the form is submitted", () => {
    const onAddPhrase = jest.fn();
    render(<AddForm onAddPhrase={onAddPhrase} />);
    const input = screen.getByLabelText(/Ingrese una frase/i);
    const button = screen.getByRole("button", { name: /Agregar/i });

    fireEvent.change(input, { target: { value: testText } });
    fireEvent.click(button);

    expect(onAddPhrase).toHaveBeenCalledWith(testText);
    expect(input).toHaveValue("");
  });
});
