import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./app-header.module.css"

const AppHeader = () => {
  return (
    <header className={styles.AppHeader}>
      <nav className={styles.leftnav}>
        <a href="#">
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default">Конструктор</p>
        </a>
        <a href="#">
          <ListIcon type="primary" />
          <p className="text text_type_main-default text_color_inactive">
            Лента заказов
          </p>
        </a>
      </nav>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.rightnav}>
        <a href="#">
          <ProfileIcon type="primary" />
          <p className="text text_type_main-default text_color_inactive">
            Личный кабинет
          </p>
        </a>
      </nav>
    </header>
  )
}

export default AppHeader
