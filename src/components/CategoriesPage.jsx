// CategoriesPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/products/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesPage;
