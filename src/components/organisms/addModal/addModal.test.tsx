import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/reduxConfig/store";

import AddModal from "./index";

describe("AddModal", () => {
  const testText = "Nueva frase";

  const renderWithProvider = (ui: React.ReactElement) => {
    return render(<Provider store={store}>{ui}</Provider>);
  };

  it("should render the AddModal", () => {
    renderWithProvider(<AddModal open={true} onClose={jest.fn()} />);
    expect(screen.getByText(/Agregar frase/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ingrese una frase/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Agregar/i })).toBeInTheDocument();
  });

  it("should call handleAddPhrase with the input value when the button is clicked", () => {
    const onClose = jest.fn();
    renderWithProvider(<AddModal open={true} onClose={onClose} />);
    const input = screen.getByLabelText(/Ingrese una frase/i);
    const button = screen.getByRole("button", { name: /Agregar/i });

    fireEvent.change(input, { target: { value: testText } });
    fireEvent.click(button);

    expect(onClose).toHaveBeenCalled();
  });
});
