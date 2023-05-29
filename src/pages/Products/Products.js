import React, { useState, useEffect, useContext } from "react";
import Cards from "../../components/Cards/Cards";
import "./Products.css";
import Currency from "../Products/Currency/Currency";
import Pagination from "@mui/material/Pagination";
import { AppContext } from "../../AppContext/AppCotext";
import { toast } from "react-hot-toast";

export default function Products() {
  const { product, addToCart, cart, deleteFromCart } = useContext(AppContext);
  const [currency, setCurrency] = useState(1);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const currencySign = (currency) => {
    switch (currency) {
      case 1:
        return "$";
      case 0.92:
        return "€";
      case 108.36:
        return "din";
      case 6.97:
        return "kn";
      case 1.81:
        return "KM";
      default:
        return "";
    }
  };

  const productsPerPage = 15;
  const numOfPages = Math.ceil((product && product.length) / productsPerPage);

  const convertCurrency = (el) => {
    if (currency) {
      const price = el * currency;
      return Math.round(price);
    }
    return el;
  };

  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
  };

  return (
    <>
      <div className="set-currency">
        <Currency handleCurrencyChange={handleCurrencyChange} />
      </div>
      <div className="products-container">
        {product
          .map((product) => (
            <Cards
              key={product.id}
              id={product.id}
              productName={product.title}
              productPrice={convertCurrency(product.price)}
              currencySign={currencySign(currency)}
              productImage={product.imageURL}
              addToCart={() => {
                addToCart(product.id);
              }}
              deleteFromCart={() => {
                deleteFromCart(product.id);
              }}
            />
          ))
          .slice((page - 1) * productsPerPage, page * productsPerPage)}
      </div>
      <div className="pagination">
        <Pagination
          size="large"
          count={numOfPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
