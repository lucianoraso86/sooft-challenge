import { render, screen, fireEvent } from "@testing-library/react";
import SimpleCard from "./index";

describe("SimpleCard", () => {
  const testText = "Nueva frase";
  const onDelete = jest.fn();

  beforeEach(() => {
    render(<SimpleCard text={testText} onDelete={onDelete} />);
  });

  it("should render the SimpleCard with text", () => {
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it("should call onDelete when delete button is clicked", () => {
    const deleteButton = screen.getByLabelText(/delete/i);
    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalled();
  });
});
