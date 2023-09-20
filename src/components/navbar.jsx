import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComp from "../helper/button";
import "../styles/component.css";
import "../styles/global.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Drawer, Dropdown, Space } from "antd";

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
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className={`navbar ${!light ? "transparent" : null}`}>
      <Drawer
        placement={"top"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"top"}
        height={"auto"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="container main-section"
        >
          <input
            style={{
              height: "auto",
              width: "100%",
              padding: "0px 20px",
            }}
            type="text"
            placeholder="Write something to search..."
          />
          <ButtonComp text="Search" hover={false} />
        </form>
      </Drawer>
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
        {home ? <ButtonComp text="Contact us" white /> : null}
        <Link to={"/donate"}>
          <ButtonComp text="Donate Now" />
        </Link>
        <button
          style={{
            cursor: "pointer",
          }}
          className="flex searchButton"
          onClick={showDrawer}
        >
          <SearchIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
