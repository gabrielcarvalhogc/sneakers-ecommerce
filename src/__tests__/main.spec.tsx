import MainPage from "@/components/mainPage"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

describe("main compoment",() => {
  it("should render correctly", () => {
    render(<MainPage/>)

    const mainTitle = screen.getByText("Fall Limited Edition Sneakers");

    expect(mainTitle).toBeInTheDocument();
  })

  it("have the right price", () => {
    render(<MainPage/>)

    const sneakerPrice = screen.getByRole("sneakersPrice");

    expect(sneakerPrice).toHaveTextContent("$125.00");
  })

  it("sneakers quantity value starts with 0", () => {
    render(<MainPage/>)
    
    const sneakersQuantity = screen.getByRole("quantity");

    expect(sneakersQuantity).toHaveTextContent("0");
  })

  it("clicking the increment button add + 1 to the sneakers value", () => {
    render(<MainPage/>)

    const incrementButton = screen.getByRole("increment");
    const sneakersQuantity = screen.getByRole("quantity");

    expect(sneakersQuantity).toHaveTextContent("0");
    fireEvent.click(incrementButton);
    expect(sneakersQuantity).toHaveTextContent("1");
  })

  it("clicking the decrement button add - 1 to the sneakers value", () => {
    render(<MainPage/>)

    const incrementButton = screen.getByRole("increment");
    const decrementButton = screen.getByRole("decrement");
    const sneakersQuantity = screen.getByRole("quantity");

    expect(sneakersQuantity).toHaveTextContent("0");
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    expect(sneakersQuantity).toHaveTextContent("0");
  })

  //não poder ser menor que 0
  //refatorar código
  //fazer testes de adicionar ao carrinho
})