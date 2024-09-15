import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css"
export default function Navigation(){
  return(
    <ul className={clsx(css.navigationList)}>
    <li>
      <NavLink to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies">
        Movies
      </NavLink>
    </li>
  </ul>
  )
}