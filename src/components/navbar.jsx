import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonComp from "../helper/button";
import "../styles/component.css";
import "../styles/global.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Drawer, Dropdown, Select, Space } from "antd";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ home = false, light = false }) => {
  const location = useLocation();
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
  const languages = [
    { key: "1", label: "En" },
    { key: "2", label: "Es" },
    { key: "3", label: "Fr" },
  ];
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const navOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [activeNav, setActiveNav] = useState(null);
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
      // to: "",
    },
    {
      label: "Blogs",
      to: "/blog",
    },
  ];
  // const handleActiveNav = (nav) => {
  //   setActiveNav(nav);
  // };
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
        {/* <ul className="flex hide-tablet"> */}
        <MenuItem
          onClick={handleClose}
          sx={{
            width: "120px",
          }}
        >
          <Link
            to={"/"}
            className={`helper-p3 ${activeNav == "Home" ? "nav-active" : null}`}
          >
            Home
          </Link>
        </MenuItem>
        {home ? (
          <>
            <MenuItem onClick={handleClose}>
              <Link
                to={"/causes"}
                className={`helper-p3 ${
                  activeNav == "Causes" ? "nav-active" : null
                }`}
              >
                Causes
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to={"/about"}
                className={`helper-p3 ${
                  activeNav == "About" ? "nav-active" : null
                }`}
              >
                About
              </Link>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleClose}>
              <Link
                to={"/about"}
                className={`helper-p3 ${
                  activeNav == "About" ? "nav-active" : null
                }`}
              >
                About
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to={"/causes"}
                className={`helper-p3 ${
                  activeNav == "Causes" ? "nav-active" : null
                }`}
              >
                Causes
              </Link>
            </MenuItem>
          </>
        )}
        <MenuItem onClick={handleClose}>
          <Link
            to={"/contact"}
            className={`helper-p3 ${
              activeNav == "Contact" ? "nav-active" : null
            }`}
          >
            Contact
          </Link>
          {/* <KeyboardArrowDownIcon /> */}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to={"/faq"}
            className={`helper-p3 ${activeNav == "FAQ" ? "nav-active" : null}`}
          >
            FAQ
          </Link>
          {/* <KeyboardArrowDownIcon /> */}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to={"/blog"}
            className={`helper-p3 ${
              activeNav == "Blogs" ? "nav-active" : null
            }`}
          >
            Blogs
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to={"/donate"}
            className={`helper-p3 ${
              activeNav == "Blogs" ? "nav-active" : null
            }`}
          >
            Donate
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to={"/element"}
            className={`helper-p3 ${
              activeNav == "Blogs" ? "nav-active" : null
            }`}
          >
            Elements
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to={"/*"}
            className={`helper-p3 ${
              activeNav == "Blogs" ? "nav-active" : null
            }`}
          >
            404 error
          </Link>
        </MenuItem>
        {/* </ul> */}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
      <Link to={"/"}>
        <img
          src={require(`../assets/${light ? "logo_black" : "logo"}.png`)}
          alt=""
        />
      </Link>
      <ul className="flex hide-tablet">
        {navs?.map((nav, index) => {
          return (
            <Link
              to={nav.to}
              className={`helper-p3 ${
                location.pathname === nav.to ? "nav-active" : null
              }`}
              // onClick={() => {
              //   handleActiveNav(nav.label);
              // }}
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
                  {/* <DownOutlined /> */}
                  <div
                    className={`helper-p3 flex ${
                      activeNav == "" ? "nav-active" : null
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
          <MenuIcon style={{ color: !light ? "#ffffff" : "#000000" }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
