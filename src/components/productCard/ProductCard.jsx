import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function ProductCard({ product }) {
  const addCart = () => {
    toast(product.title + " Adicionado ao Carrinho", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: "linear-gradient(135deg, #b5b8c6ff 0%, #151515ff 100%)",
        color: "white",
        fontWeight: "bold",
      },
    });
  };
  const addFavorite = () => {
    toast(product.title + " Adicionado aos Favoritos", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: "linear-gradient(135deg, #b5b8c6ff 0%, #151515ff 100%)",
        color: "white",
        fontWeight: "bold",
      },
    });
  };
  return (
    <div className={styles.products}>
      <div className={styles.productCard}>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          className={styles.productImage}
        />
        <h2 className={styles.productTitle}>{product.title}</h2>
        <h1 className={styles.productPrice}>{product.price}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.productRating}>
          <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
          <span className={styles.ratingCount}>
            ({product.rating.count}) - {product.rating.reviews} avaliações
          </span>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={addCart}>
            Adicionar Ao Carrinho
          </button>
          <button className={styles.buttonCart} onClick={addFavorite}>
            🤍
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
