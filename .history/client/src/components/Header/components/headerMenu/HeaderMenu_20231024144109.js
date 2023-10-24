import styles from "./HeaderMenu.module.scss";
import { NavLink } from "react-router-dom";

//
function HeaderMenu() {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>
        <NavLink to="/AddRecipePage"> Ajouter une recette </NavLink>
      </li>
      <li>
        <NavLink to="/Profile"> Profil </NavLink>
      </li>
      <li>Déconnexion</li>
    </ul>
  );
}

export default HeaderMenu;
