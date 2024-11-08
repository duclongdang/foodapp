import styles from "./foodItem.module.css";

export default function FoodItem({ foodItem }) {
  return (
    <div className={styles.itemContainer} key={foodItem.id}>
      <img className={styles.itemImage} src={foodItem.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{foodItem.title} </p>{" "}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.itemButton}>View recipe</button>
      </div>
    </div>
  );
}
