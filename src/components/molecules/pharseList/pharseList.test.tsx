import { render, screen } from "@testing-library/react";
import PhraseList from "./index";
import { Provider } from "react-redux";
import store from "@/reduxConfig/store";

describe("PhraseList", () => {
  const phrases = [
    { id: "1", text: "Frase test 1" },
    { id: "2", text: "Frase test 2" },
    { id: "3", text: "Frase test 3" },
  ];

  const renderWithProvider = (ui: React.ReactElement) => {
    return render(<Provider store={store}>{ui}</Provider>);
  };

  it("should render the PhraseList with phrases", () => {
    renderWithProvider(<PhraseList phrases={phrases} />);
    expect(screen.getByText(/Frase test 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Frase test 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Frase test 3/i)).toBeInTheDocument();
  });

});
