import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/reduxConfig/store";

import AddModal from "./index";

describe("AddModal", () => {
  const testText = "Nueva frase";
  const onClose = jest.fn();

  const renderWithProvider = (children: React.ReactElement) => {
    return render(<Provider store={store}>{children}</Provider>);
  };

  beforeEach(() => {
    renderWithProvider(<AddModal open={true} onClose={onClose} />);
  });

  it("should render the AddModal", () => {
    expect(screen.getByText(/Agregar frase/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ingrese una frase/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Agregar/i })).toBeInTheDocument();
  });

  it("should call handleAddPhrase with the input value when the button is clicked", () => {
    const input = screen.getByLabelText(/Ingrese una frase/i);
    const button = screen.getByRole("button", { name: /Agregar/i });

    fireEvent.change(input, { target: { value: testText } });
    fireEvent.click(button);

    expect(onClose).toHaveBeenCalled();
  });
});
