import React from "react";
import { Link } from "react-router-dom";
import ButtonComp from "../helper/button";
import "../styles/component.css";
import "../styles/global.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Navbar = ({ home = false, light = false }) => {
  const pages = [
    {
      key: "1",
      label: <Link to="/causes">Causes</Link>,
    },
    {
      key: "2",
      label: <Link to="/contact">Contact</Link>,
    },
    {
      key: "3",
      label: <Link to="/faq">FAQ</Link>,
    },
  ];
  return (
    <nav className={`navbar ${!light ? "transparent" : null}`}>
      <img
        src={require(`../assets/${light ? "logo_black" : "logo"}.png`)}
        alt=""
      />
      <ul className="flex">
        <Link to={"/"} className="helper-p3">
          Home
        </Link>
        {home ? (
          <>
            <Link to={"/causes"} className="helper-p3">
              Causes
            </Link>
            <Link to={"/about"} className="helper-p3">
              About
            </Link>
          </>
        ) : (
          <>
            <Link to={"/about"} className="helper-p3">
              About
            </Link>
            <Link to={"/causes"} className="helper-p3">
              Causes
            </Link>
          </>
        )}
        <Link className="helper-p3 flex">
          <Dropdown
            menu={{
              items: pages,
            }}
          >
            {/* <DownOutlined /> */}
            <Space className="helper-p3">Pages</Space>
          </Dropdown>
          {/* <KeyboardArrowDownIcon /> */}
        </Link>
        <Link to={"/blog"} className="helper-p3">
          Blogs
        </Link>
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
        <button
          style={{
            cursor: "pointer",
          }}
          className="flex searchButton"
        >
          <SearchIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
