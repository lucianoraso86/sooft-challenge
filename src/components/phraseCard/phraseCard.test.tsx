import { render, screen, fireEvent } from "@testing-library/react";
import PhraseCard from "./index";

describe("PhraseCard", () => {
  const testText = "Nueva frase";
  const onDelete = jest.fn();

  beforeEach(() => {
    render(<PhraseCard text={testText} onDelete={onDelete} />);
  });

  it("should render the PhraseCard with text", () => {
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it("should call onDelete when delete button is clicked", () => {
    const deleteButton = screen.getByLabelText(/delete/i);
    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalled();
  });
});
