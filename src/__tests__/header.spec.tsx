import Header from "@/components/header"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import MainPage from "@/components/mainPage"

describe ("Header", () => {
  it("should render the logo", () => {
    render(<Header />)

    const logo = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
  })

  it("clicking the logo should returns to the homepage", () => {
    render(<Header />)

    const logo = screen.getByTestId("logo");
    fireEvent.click(logo);
    render(<MainPage/>);
    
    const mainPageTitle = screen.getByText("Sneaker Company")
    expect(mainPageTitle).toBeInTheDocument();
  })
})