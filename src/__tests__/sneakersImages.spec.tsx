import { SneakersImages } from "@/components/sneakersImages"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Sneakers images", () => {
  it("should render correctly", () => {
    const { container } = render(<SneakersImages />);

    expect(container).toBeInTheDocument();
  })

  it("render a default image initially", () => {
    render(<SneakersImages />);

    const initialImage = screen.getByAltText('Orange shoes');

    expect(initialImage).toBeInTheDocument();
  })

  it('Clicking a thumbnail adds the "selected" class', () => {
    render(<SneakersImages />);
  
    const mainImage = screen.getByAltText('Orange shoes');
    const firstThumbnail = screen.getByAltText('um par de tênis em um fundo laranja');
  
    fireEvent.click(firstThumbnail);
  
    expect(firstThumbnail).toHaveClass('selected');
  });
})