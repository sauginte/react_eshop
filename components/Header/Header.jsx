import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
const Header = () => {
  const [links, setLinks] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    const uniqueCategories = [
      ...new Set(response.data.map((item) => item.category)),
    ];

    setLinks(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>UGMONK</div>
        <nav>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.meniu}>
          <p>Search</p>
          <input type="text"></input>
        </div>
      </header>

      <section className={styles.photoSection}>
        <img src="https://www.shutterstock.com/image-photo/clothes-on-clothing-hanger-600nw-2338282257.jpg"></img>
      </section>
    </>
  );
};
export default Header;
