import styles from "./styles.module.css";
import Product from "../Product/Product";
const Main = ({ products }) => {
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
