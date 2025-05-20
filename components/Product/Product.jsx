import styles from "./styles.module.css";

const Product = ({ imgUrl, title, description, rate, count }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={imgUrl} />
        <h5>{title}</h5>
        <p className={styles.description}>
          Description: {description.split(" ", 3).join(" ") + "..."}
        </p>
        <p className={styles.paragraph}>Rate: {rate}</p>
        <p className={styles.paragraph}>Left: {count}</p>
      </div>
    </>
  );
};

export default Product;
