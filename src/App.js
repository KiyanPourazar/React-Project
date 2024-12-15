import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
  ]);

  const deletePtoduct = (id) => {
    setProducts(products.filter((item) => item.id !== id))

    }

  return (
    <div className="container">
      <ProductList products={products} onDelete={deletePtoduct} />
    </div>
  );
};

export default App;
