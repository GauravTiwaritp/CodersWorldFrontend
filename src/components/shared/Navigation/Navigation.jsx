import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    aligItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };

  return (
    <>
      <nav className={`${style.navbar} container `}>
        <Link style={brandStyle} to="/" alt="">
          <img src="/images/logo.png" alt="logo" style={logoText} />
          <span>Coderhouse</span>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
