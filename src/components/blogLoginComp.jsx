import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from "@mui/icons-material/Person";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Select } from "antd";
import React from "react";
import { P4 } from "../helper/paragraph";
import "../styles/pages/blog.css";

const BlogLoginComp = () => {
  return (
    <section className="blog-login-section">
      <div>
        <P4 text="0 Comments" />
        <P4 text="themefisher" />
        <P4
          text="Privacy Policy"
          style={{
            flex: 1,
          }}
        />
        <div
          className="helper-p4 dropdown"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <span
            style={{
              borderRadius: "50%",
              padding: "0 5px",
              backgroundColor: "var(--primary)",
              color: "var(--light)",
              fontSize: "12px",
            }}
          >
            1
          </span>
          <Select
            defaultValue="Login"
            color="white"
            style={{
              width: "fit-content",
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
                value: "Login",
                label: "Login",
              },
              {
                value: "Signup",
                label: "Signup",
              },
            ]}
          />
        </div>
      </div>
      <div>
        <p className="helper-p4">
          <FavoriteBorderIcon style={{ color: "var(--primary)" }} />
          Favorite
        </p>
        <p
          className="helper-p4"
          style={{
            color: "var(--light)",
            backgroundColor: "#01ACED",
          }}
        >
          <TwitterIcon />
          Tweet
        </p>
        <p
          className="helper-p4"
          style={{
            color: "var(--light)",
            backgroundColor: "#3B5998",
          }}
        >
          <FacebookIcon />
          Share
        </p>
        <p
          style={{
            flex: 1,
          }}
        ></p>
        <div
          className="helper-p4 dropdown"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <Select
            defaultValue="Sort by Best"
            color="white"
            style={{
              width: "fit-content",
              backgroundColor: "transparent",
              color: "white",
            }}
            dropdownStyle={{
              color: "white",
              width: "fit-content",
            }}
            bordered={false}
            options={[
              {
                value: "Sort by Best",
                label: "Sort by Best",
              },
              {
                value: "Sort by Latest",
                label: "Sort by Latest",
              },
            ]}
          />
        </div>
      </div>
      <div
        style={{
          gap: "10px",
        }}
      >
        <label htmlFor="discussion">
          <PersonIcon
            fontSize="large"
            style={{
              color: "var(--textLight)",
              backgroundColor: "#eeeeee",
            }}
          />
        </label>
        <input type="text" id="discussion" placeholder="Start the discussion" />
      </div>
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
        }}
      >
        <P4 text="LOGIN WITH" />
        <P4 text="OR SIGN UP WITH DISQUS?" />
      </div>
      <div className="login-icons">
        <div
          className="image"
          style={{
            width: "38px",
            height: "38px",
            marginTop: "5px",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src={require("../assets/disqus_icon.png")}
            alt="disqus_icon"
          />
        </div>
        <TwitterIcon
          style={{
            backgroundColor: "#01ACED",
          }}
        />
        <FacebookIcon
          style={{
            backgroundColor: "#3B5998",
          }}
        />
        <GoogleIcon
          style={{
            backgroundColor: "#E63343",
          }}
        />
        <input
          style={{
            padding: "5px 3px",
          }}
          type="text"
          placeholder="name"
        />
      </div>
    </section>
  );
};

export default BlogLoginComp;
