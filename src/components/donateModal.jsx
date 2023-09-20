import React from "react";
import { H6 } from "../helper/heading";
import ButtonComp from "../helper/button";
import "../styles/component.css";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DonateModal = ({ open, setOpen }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#ffffff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    height: "100%",
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="donate-now-modal relative"
    >
      <Box sx={style}>
        <button
          style={{
            top: "15px",
            right: "15px",
            cursor: "pointer",
          }}
          onClick={handleClose}
          className=" absolute"
        >
          <CloseIcon />
        </button>
        <div>
          <H6
            text="Your Donation"
            style={{
              borderBottom: "1px solid #DDDDDD",
            }}
          />
          <div className="custom-amount">
            <div>
              <label htmlFor="amount">
                <ButtonComp text="$" hover={false} />
              </label>
              <input
                style={{
                  height: "auto",
                }}
                type="text"
                name="amount"
                id="amount"
              />
            </div>
            <ButtonComp
              text="CastomeAmount"
              style={{
                wordBreak: "keep-all",
              }}
            />
          </div>
          <div className="amount-buttons" style={{}}>
            <ButtonComp
              text="$10:00"
              white
              thin
              style={{
                borderColor: "var(--primary)",
              }}
            />
            <ButtonComp
              text="$25:00"
              white
              thin
              style={{
                borderColor: "var(--primary)",
              }}
            />
            <ButtonComp
              text="$50:00"
              white
              thin
              style={{
                borderColor: "var(--primary)",
              }}
            />
            <ButtonComp
              text="$100:00"
              white
              thin
              style={{
                borderColor: "var(--primary)",
              }}
            />
            <ButtonComp
              text="$250:00"
              white
              thin
              style={{
                borderColor: "var(--primary)",
              }}
            />
          </div>
        </div>
        <div>
          <H6
            text="Select Payment Method"
            style={{
              paddingBottom: "0px",
            }}
          />
          <div className="radio-button-container">
            <input
              style={{
                display: "block",
              }}
              type="radio"
              name="gender"
              value=""
              id="testDonation"
            />
            <label
              style={{
                display: "block",
              }}
              className="test-dontation-label"
              htmlFor="testDonation"
            >
              Test donation
            </label>
          </div>
          <div className="radio-button-container">
            <input
              type="radio"
              name="gender"
              value=""
              id="offlineDonation"
              className="right-radio"
              style={{
                display: "block",
              }}
            />
            <label
              style={{
                display: "block",
              }}
              htmlFor="offlineDonation"
            >
              {" "}
              Offlile Donation
            </label>
          </div>
        </div>
        <div className="personal-info">
          <H6
            text="Parsonal info"
            style={{
              borderBottom: "1px solid #DDDDDD",
            }}
          />
          <div
            style={{
              gap: "20px",
            }}
            className="flex-responsive"
          >
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Your Email" />
          <textarea name="" id="" placeholder="Leave A comment..."></textarea>
          <div>
            <input type="checkbox" id="terms" name="checkbox" value="1" />
            <label htmlFor="terms"> Agree to Terms?</label>
          </div>
          <div style={{}} className="total-donation-container">
            <input
              type="text"
              value={"Donation Total:"}
              disabled
              style={{
                color: "var(--textPrimary)",
                height: "auto",
              }}
            />
            <ButtonComp text="$10.00" hover={false} />
          </div>
        </div>
        <ButtonComp
          text="Donate now"
          full
          white
          style={{
            border: "1px solid var(--primary)",
          }}
        />
      </Box>
    </Modal>
  );
};

export default DonateModal;
