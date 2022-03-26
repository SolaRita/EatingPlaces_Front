import React from "react";
import styles from "../../styles/modules/ListCategory.module.css";
import { useState, useEffect } from "react";
import CardCategory from "../cardCategory/cardCategory";
import { Services } from "../../services/Services";
import { Link } from "react-router-dom";

export default function ListCategories() {
  const [categories, setCategories] = useState([]);

  const apiCategories = Services();

  useEffect(() => {
    apiCategories
      .getCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    
  }, [apiCategories, categories]);
  
  return (
    <div className={styles.frameList}>
      <h2 className={styles.city}>Barcelona</h2>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          
          <Link to={`/categories/${category.id}/places`} category={category} key={index} className={styles.cardColor}>
            <CardCategory category={category}  />
          </Link>
        ))}
      </div>
    </div>
  );
}
