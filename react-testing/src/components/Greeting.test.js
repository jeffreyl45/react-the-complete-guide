import Greeting from "./Greeting";
import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // nothing in this case

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting/>);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  })

  test('renders changed if button was clicked', () => {
    render(<Greeting/>);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)


    const outputElement = screen.getByText("changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  })

  test('does not render good to see you if button was clicked', () => {
    render(<Greeting/>);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // queryByText returns null if element not found
    const outputElement = screen.queryByText("good to see you", { exact: false });
    expect(outputElement).toBeNull();
    
  })
});
