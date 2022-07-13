import styles from "./order-details.module.css"
import { useSelector } from "react-redux"

const OrderDetails = () => {
  const number = useSelector((state) => state.orderReducer.number)
  return (
    <section className={styles.Main}>
      <h2 className="text text_type_digits-large mt-8">{number}</h2>
      <p className="text text_type_main-medium mt-8">Идентификатор заказа</p>
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-20">
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  )
}

export default OrderDetails
