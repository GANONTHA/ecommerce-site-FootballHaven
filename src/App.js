import Rootpage from "./pages/Rootpage";
import ProductProvider from "./Provider/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <Rootpage />
    </ProductProvider>
  );
}

export default App;
