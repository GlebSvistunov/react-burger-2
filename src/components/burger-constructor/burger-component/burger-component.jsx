import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./burger-component.module.css"
import { useDrag } from "react-dnd"
import {
  DND_BURGER_TYPE,
  DND_COMPONENT,
} from "../../../services/constants/dnd-items"
import { useDispatch } from "react-redux"
import { deleteComponent } from "../../../services/action/burger"

export const BurgerComponent = ({ component }) => {
  const dispatch = useDispatch()
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: DND_BURGER_TYPE,
    item: { type: DND_COMPONENT, item: component },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }))
  return (
    <li className={styles.Item} key={component.uuid} ref={drag}>
      <DragIcon />
      <ConstructorElement
        text={component.ingredient.name}
        price={component.ingredient.price}
        thumbnail={component.ingredient.image_mobile}
        handleClose={() => dispatch(deleteComponent(component))}
      />
    </li>
  )
}
