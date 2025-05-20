import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Product from "../Product/Product";
import axios from "axios";
const Main = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    setProducts(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h2 className={styles.header}>PRODUCTS</h2>
      <main className={styles.main}>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              imgUrl={product.image}
              description={product.description}
              rate={product.rating.rate}
              count={product.rating.count}
            />
          );
        })}
      </main>
    </>
  );
};

export default Main;
