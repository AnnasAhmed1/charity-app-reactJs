import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonComp from "../helper/button";
import "../styles/component.css";
import "../styles/global.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Drawer, Dropdown, Select } from "antd";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ home = false, light = false }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false); //search drawer
  const [anchorEl, setAnchorEl] = useState(null);
  const navOpen = Boolean(anchorEl);
  const activeNav = null;
  const navs = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Causes",
      to: "/causes",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Pages",
    },
    {
      label: "Blogs",
      to: "/blog",
    },
  ];
  const pages = [
    {
      key: "1",
      label: (
        <Link
          to="/causes"
          className={`helper-p3 ${
            location.pathname === "/causes" ? "nav-active" : null
          }`}
        >
          Causes
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          to="/contact"
          className={`helper-p3 ${
            location.pathname === "/contact" ? "nav-active" : null
          }`}
        >
          Contact
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          to="/faq"
          className={`helper-p3 ${
            location.pathname === "/faq" ? "nav-active" : null
          }`}
        >
          FAQ
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          to="/404"
          style={{
            // width: "500px",
            borderBottom:
              location.pathname === "/404"
                ? "1px solid var(--textPrimary)"
                : null,
          }}
          className={`helper-p3 ${
            location.pathname === "/404" ? "nav-active" : null
          }`}
        >
          404 error
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link
          to="/element"
          className={`helper-p3 ${
            location.pathname === "/element" ? "nav-active" : null
          }`}
        >
          Elements
        </Link>
      ),
    },
  ];
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={navOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {[
          { label: "Home", path: "/", activeNav: "Home" },
          { label: "Causes", path: "/causes", activeNav: "Causes" },
          { label: "About", path: "/about", activeNav: "About" },
          { label: "Contact", path: "/contact", activeNav: "Contact" },
          { label: "FAQ", path: "/faq", activeNav: "FAQ" },
          { label: "Blogs", path: "/blog", activeNav: "Blogs" },
          { label: "Donate", path: "/donate", activeNav: "Donate" },
          { label: "Elements", path: "/element", activeNav: "Elements" },
          { label: "404 error", path: "/404", activeNav: "404 error" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`helper-p3 ${
              activeNav === item.activeNav ? "nav-active" : null
            }`}
          >
            <MenuItem onClick={handleClose}>{item.label}</MenuItem>
          </Link>
        ))}
      </Menu>
      <Link to={"/"}>
        <img
          src={require(`../assets/${light ? "logo_black" : "logo"}.png`)}
          alt="logo"
        />
      </Link>
      <ul className="flex hide-tablet">
        {navs?.map((nav, index) => {
          return (
            <Link
              key={index}
              to={nav.to}
              className={`helper-p3 ${
                location.pathname === nav.to ? "nav-active" : null
              }`}
            >
              {nav.label !== "Pages" ? (
                nav.label
              ) : (
                <Dropdown
                  overlayStyle={{
                    minWidth: "125px",
                  }}
                  menu={{
                    items: pages,
                  }}
                  arrow
                >
                  <div
                    className={`helper-p3 flex ${
                      activeNav === "" ? "nav-active" : null
                    }`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Pages
                    <KeyboardArrowDownIcon />
                  </div>
                </Dropdown>
              )}
            </Link>
          );
        })}
      </ul>
      <div className="flex">
        <Select
          defaultValue="En"
          color="white"
          style={{
            width: 60,
            backgroundColor: "transparent",
            color: "white",
          }}
          dropdownStyle={{
            color: "white",
            width: 80,
          }}
          bordered={false}
          options={[
            {
              value: "En",
              label: "En",
            },
            {
              value: "Es",
              label: "Es",
            },
            {
              value: "Fr",
              label: "Fr",
            },
          ]}
        />

        {home ? (
          <Link to={"/contact"}>
            <ButtonComp text="Contact us" white className="hide-mobile" />
          </Link>
        ) : null}
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
        <button onClick={handleClick} className="show-tablet">
          <MenuIcon
            style={{ color: !light ? "var(--light)" : "var(--dark)" }}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
