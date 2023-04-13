import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { products };
};