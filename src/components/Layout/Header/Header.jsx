import { useContext } from "react";
import { NavLink } from "react-router";
import { PropTypes } from "prop-types";
import { AuthContext } from "@/context/context";
import { AuthNav } from "../Sidebar/Nav/AuthNav";
import { AppBar } from "../Sidebar/Nav";

export const Header = () => {
  const { isLogin } = useContext(AuthContext);

  return (
    <header className="pb-4" style={{ padding: "8px 0" }}>
      <div className="flex">
        <NavLink to="/">Home</NavLink>
        {isLogin ? <AppBar /> : <AuthNav />}
      </div>
    </header>
  );
};

Header.propType = {
  title: PropTypes.string.isRequired,
};
