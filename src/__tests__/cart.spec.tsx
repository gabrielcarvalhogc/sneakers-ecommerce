import { Cart } from "@/components/cart"
import { CartProvider } from "@/contexts/CartContext"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

describe("Cart Component", () => {
  
  it("Should render correctly", () => {
    render(<Cart/>);
    
    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument();
  })

  it("click on cart show cart info", () => {
    render(<Cart/>);
    const button = screen.getByTestId("button");
    
    fireEvent.click(button);
    const cartInfoTitle = screen.getByText("Cart");

    expect(cartInfoTitle).toBeInTheDocument();
  })

  it('renders cart quantity as 0 when cart is empty', () => {
    const { getByTestId } = render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    const button = getByTestId('button');
    fireEvent.click(button);

    const quantity = getByTestId('quantity');
    expect(quantity.textContent).toBe('0');
  });
})