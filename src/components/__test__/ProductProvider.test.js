import {
  ProductContext,
  ProductProvider,
} from "../../Provider/ProductProvider";
//TODO: import {mount} from 'enzyme'

describe("cart", () => {
  it("cart should be zero at the time we launch the app", () => {
    const TestComponent = () => {
      const { cart } = React.useContext(ProductContext);

      return (
        <>
          <div data-testid="value">{cart.lenght}</div>
        </>
      );
    };
    const wrapper = mount(
      <ProductProvider>
        <TestComponent />
      </ProductProvider>
    );
    expect(wrapper.find('[data-testid="value"]').text()).toEqual("0");
  });
});
