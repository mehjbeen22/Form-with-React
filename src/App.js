// import styles from "./App.module.css";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    console.log("Name:", name);
    console.log("Image:", image);
    console.log("Brand:", brand);
    console.log("Price", price);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formCase}>
          <h1 className={styles.heading}>Add Category Carefully </h1>

          <form className={styles.formCantainer} onSubmit={handleSubmit}>
            <label className={styles.labelCase}>Name :</label>
            <input
              type="text"
              placeholder="Enter Category name"
              className={styles.inputBox}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className={styles.labelCase}>Image :</label>
            <input
              type="file"
              placeholder="No file chosen"
              className={styles.inputBox}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label className={styles.labelCase}>Brand :</label>
            <input
              type="text"
              placeholder="Enter Gategory Description"
              className={styles.inputBox}
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />

            <label className={styles.labelCase}>Super Category :</label>
            <select className={styles.inputBox}>
              <option value="">Choose Category</option>
            </select>

            <label className={styles.labelCase}>Category :</label>
            <select className={styles.inputBox}>
              <option value="">Choose Category</option>
            </select>

            <label className={styles.labelCase}>Sub Category :</label>
            <select className={styles.inputBox}>
              <option value="">Choose Category</option>
            </select>

            <label className={styles.labelCase}>Price :</label>
            <input type="number" className={styles.inputBox} placeholder="0" />

            <label className={styles.labelCase}>Rating :</label>
            <input
              type="number"
              className={styles.inputBox}
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button id={styles.btn}>Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
