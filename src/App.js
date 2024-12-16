import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import AppProduct from "./components/AddProduct/AddProduct";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
  ]);

  const addProduct = (title) => {
    const id = Math.floor(Math.random() * 1000)

    const newProduct = {id, ...title}

    setProducts([...products, newProduct])
  }

  const deletePtoduct = (id) => {
    setProducts(products.filter((item) => item.id !== id))


    }

  return (
    <div className="container">
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onDelete={deletePtoduct} />
    </div>
  );
};

export default App;
