"use client"

import React from 'react';
import styles from './Header.module.css';
import { productsData } from '../../../data/products';
import { useState, useEffect } from 'react';

export default function ProductCard() {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);
  
    // Carregar produtos do arquivo data/products.js
    useEffect(() => {
      // Simular carregamento (opcional - pode ser síncrono)
      setProducts(productsData);
    }, []);
  
    // Atualizar contador automaticamente quando produtos mudarem
    useEffect(() => {
      setProductCount(products.length);
    }, [products]);
  return (
    <div className={styles.header}>
            <h1>🛒 Loja de Eletrônicos</h1>
            <p>Os melhores produtos com os melhores preços!</p>
                  <h1>📊 Total de produtos: {productCount}</h1>
        </div>

  ) ;
}

