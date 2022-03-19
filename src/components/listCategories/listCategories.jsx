import React from "react";
import styles from "../../styles/modulos/ListCategory.module.css";
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

    console.log(categories);
  }, [apiCategories, categories]);

  return (
    <div className={styles.frameList}>
      <h2 className={styles.city}>Barcelona</h2>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <Link to="/category" className={styles.cardColor}>
            <CardCategory category={category} key={index} />
          </Link>
        ))}
      </div>
    </div>
  );
}
