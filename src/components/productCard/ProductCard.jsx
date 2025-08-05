import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

export default function ProductCard({ product }) {
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
        <span className="stars">⭐⭐⭐⭐⭐</span>
        <span>({product.rating.count}) - {product.rating.rate} avaliações</span>
        </div>
        </div>

    </div>
);
}
