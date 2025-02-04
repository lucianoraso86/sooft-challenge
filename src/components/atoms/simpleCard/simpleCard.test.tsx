import { render, screen } from "@testing-library/react";
import SimpleCard from "./index";

describe("SimpleCard", () => {
  const testText = "Nueva frase";

  it("should render the SimpleCard with text", () => {
    render(<SimpleCard text={testText} onDelete={jest.fn()} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
