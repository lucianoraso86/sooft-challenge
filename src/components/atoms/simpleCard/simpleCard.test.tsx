import { render, screen, fireEvent } from "@testing-library/react";
import SimpleCard from "./index";

describe("SimpleCard", () => {
  const testText = "Nueva frase";

  it("should render the SimpleCard with text", () => {
    render(<SimpleCard text={testText} onDelete={jest.fn()} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it("should call onDelete when delete button is clicked", () => {
    const onDelete = jest.fn();
    render(<SimpleCard text={testText} onDelete={onDelete} />);
    const deleteButton = screen.getByLabelText(/delete/i);
    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalled();
  });
});
