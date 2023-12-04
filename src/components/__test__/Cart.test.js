import Cart from "../../pages/Cart";
import { render } from "@testing-library/react";
import { useProductProvider } from "../../Provider/ProductProvider";
import { useContext } from "react";

describe(Cart, () => {
  const { cart } = useProductProvider();
  it("Should return the right shipping price based on the total amount", () => {
    // const cart = [
    //   {
    //     id: 1,
    //     price: 100,
    //     quantity: 2,
    //   },
    // ];
    const { getByTestid } = render(<Cart />);
    const shipping = getByTestid("shipping").textContent;

    expect(shipping).toEqual(0);
  });
});
