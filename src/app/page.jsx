"use client"

import ProductCard from '../components/productCard/ProductCard';
import { useState, useEffect } from 'react';
import { productsData } from '../../data/products';
import styles from './page.module.css';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  // Carregar produtos do arquivo data/products.js
  useEffect(() => {
    // Simular carregamento (opcional - pode ser síncrono)
    setProducts(productsData);
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.products}>
              {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>

    </div>
  );
}
