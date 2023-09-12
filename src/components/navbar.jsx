import React from "react";
import { Link } from "react-router-dom";
import ButtonComp from "../helper/button";
import "../styles/component.css";
import "../styles/global.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = ({ home = false, light = false }) => {
  return (
    <nav className={`navbar ${!light ? "transparent" : null}`}>
      <img
        src={require(`../assets/${light ? "logo_black" : "logo"}.png`)}
        alt=""
      />
      <ul className="flex">
        <Link className="helper-p3">Home</Link>
        {home ? (
          <>
            <Link className="helper-p3">Causes</Link>
            <Link className="helper-p3">About</Link>
          </>
        ) : (
          <>
            <Link className="helper-p3">About</Link>
            <Link className="helper-p3">Causes</Link>
          </>
        )}
        <Link className="helper-p3 flex">
          Pages <KeyboardArrowDownIcon />
        </Link>
        <Link className="helper-p3">Blogs</Link>
      </ul>
      <div className="flex">
        <p className="flex">
          En
          <KeyboardArrowDownIcon />
        </p>
        {home ? (
          <ButtonComp text="Contact us" bgColor="light" color="dark" />
        ) : null}
        <ButtonComp text="Donate Now" />
        <button className="flex searchButton">
          <SearchIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
