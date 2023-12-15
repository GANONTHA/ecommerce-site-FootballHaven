import Cart from "../../pages/Cart";
import { render } from "@testing-library/react";
import App from "../../App";
// import {
//   useProductProvider,
//   ProductProvider,
// } from "../../Provider/ProductProvider";
// import { useContext } from "react";
// import { mount } from "enzyme";

// describe(Cart, () => {
//   const { cart } = useProductProvider();
//   it("Should return the right shipping price based on the total amount", () => {
//     const cart = [
//       {
//         id: 1,
//         price: 100,
//         quantity: 2,
//       },
//     ];
//     const { getByTestid } = render(<Cart />);
//     const shipping = getByTestid("shipping").textContent;

//     expect(shipping).toEqual(0);
//   });
// });
describe(App, () => {
  it("should be true", () => {
    const { getByTestid } = render(<App />);
    const title = getByTestid("home");
    expect(title).toHaveTextContent.toBe("Home");
  });
});
