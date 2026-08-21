import { useContext } from "react";
import { Login } from "./Login/Login";
import { AuthContext } from "@/context/context";
import { AuthNav } from "./Nav/AuthNav";

export const Sidebar = () => {
  const { isLogin } = useContext(AuthContext);
  return (
    <aside
      className="nav nav-pills p-5 bg-light col-2"
      style={{ height: "auto" }}
    >
      <div
        className="d-flex flex-column"
        style={{ position: "sticky", top: 30, left: 0, height: "88vh" }}
      >
        {isLogin ? <AuthNav /> : <Login />}
      </div>
    </aside>
  );
};
