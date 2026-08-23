import { NavLink } from "react-router";
import { useContext } from "react";
import { Button } from "@/components/Button";
import styles from "./Nav.module.css";
import user from "@/images/user.png";
import { AuthContext } from "@/context/context";

const privateRoutes = [
  {
    id: crypto.randomUUID(),
    path: "articles",
    title: "Articles",
  },
  {
    id: crypto.randomUUID(),
    path: "exercises",
    title: "Exercises",
  },
];

export const AppBar = () => {
  const { logout, username } = useContext(AuthContext);

  const handleClick = () => {
    logout();
  };

  return (
    <div className="flex">
      <nav>
        {privateRoutes.map(({ id, title, path }) => (
          <NavLink
            key={id}
            to={`/${path}`}
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            {title}
          </NavLink>
        ))}
      </nav>

      <div className="flex" style={{ gap: "12px" }}>
        {" "}
        <h2 className="h3 mb-4">
          Welcome back! <b>{username?.split("@")[0]}</b>
        </h2>
        <img src={user} alt="user" width={30} height={30} />
        <Button onClick={handleClick} className="btn-danger mt-auto">
          Log Out
        </Button>
      </div>
    </div>
  );
};
