import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import Contact from "../Contact";
test("should load contact us component", () => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})
test("should load button inside contact component", () => {
    render(<Contact/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})
it("should load 2 input boxes on the contact component", () => {
    render(<Contact/>);
    const inputboxes = screen.getAllByRole("textbox");
    console.log(inputboxes)
    expect(inputboxes.length).toBe(2);  
})