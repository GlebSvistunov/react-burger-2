import Card from "../../card/card";
import styles from "./ingredient-section.module.css";

function IngredientSection({title, items: data }) {
  return (
    <>
      <section className={styles.section}>
        <h2 className="text text_type_main-medium">{title}</h2>
        <div className={styles.items}>
          {data.map((item) => (
            <Card
              key={item._id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default IngredientSection;
