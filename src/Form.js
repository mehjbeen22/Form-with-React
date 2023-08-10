import React, { useState } from "react";
import styles from "./App.module.css";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    file: "",
    brand: "",
    supercategory: "",
    category: "",
    subcategory: "",
    price: "",
    rating: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your Form submitted Successfuly");
    toast.warning("Your Form submitted Successfuly");
    toast.info("Your Form submitted Successfuly");
    toast.dark("Your Form submitted Successfuly");
    toast.err("Your Form submitted Successfuly");
    console.log(form);
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
              name="name"
              placeholder="Enter Category name"
              className={styles.inputBox}
              value={form.name}
              onChange={handleChange}
            />
            <label className={styles.labelCase}>Image :</label>
            <input
              type="file"
              name="file"
              placeholder="No file chosen"
              className={styles.inputBox}
              value={form.image}
              onChange={handleChange}
            />
            <label className={styles.labelCase}>Brand :</label>
            <input
              type="text"
              name="brand"
              placeholder="Enter Gategory Description"
              className={styles.inputBox}
              value={form.brand}
              onChange={handleChange}
            />

            <label className={styles.labelCase}>Super Category :</label>
            <select
              className={styles.inputBox}
              value={form.supercategory}
              name="supercategory"
              onChange={handleChange}
            >
              <option value="">Choose Category</option>
            </select>

            <label className={styles.labelCase}>Category :</label>
            <select
              className={styles.inputBox}
              value={form.category}
              name="category"
              onChange={handleChange}
            >
              <option value="">Choose Category</option>
            </select>

            <label className={styles.labelCase}>Sub Category :</label>
            <select
              className={styles.inputBox}
              value={form.subcategory}
              name="subcategory"
              onChange={handleChange}
            >
              <option value="">Choose Category</option>
            </select>

            <label className={styles.labelCase}>Price :</label>
            <input
              type="number"
              className={styles.inputBox}
              value={form.price}
              placeholder="0"
              name="price"
              onChange={handleChange}
            />

            <label className={styles.labelCase}>Rating :</label>
            <input
              type="number"
              className={styles.inputBox}
              placeholder="0"
              name="rating"
              value={form.rating}
              onChange={handleChange}
            />

            <button id={styles.btn}>Add</button>
          </form>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Form;
