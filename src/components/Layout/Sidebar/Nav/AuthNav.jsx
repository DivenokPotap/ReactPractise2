import { NavLink } from "react-router";
import styles from "./Nav.module.css";

const publicRoutes = [
  {
    id: crypto.randomUUID(),
    path: "login",
    title: "Login",
  },
];

export const AuthNav = () => {
  return (
    <nav className="flex">
      {publicRoutes.map(({ id, title, path }) => (
        <NavLink
          key={id}
          to={`/${path}`}
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};
