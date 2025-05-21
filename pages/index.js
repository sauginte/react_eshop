import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import axios from "axios";
const MainPage = () => {
  const [links, setLinks] = useState([]);
  const [products, setProducts] = useState([]);
  // fetch'ą geriausia rašyti maine, kad jis visada visiems būtų pasiekiamas ir nereikėtų kiekviename faile apsirašinėti
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    const uniqueCategories = [
      ...new Set(response.data.map((item) => item.category)),
    ];

    setProducts(response.data);
    setLinks(uniqueCategories);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header links={links} />
      <Main products={products} />
      <Footer />
    </>
  );
};

export default MainPage;
