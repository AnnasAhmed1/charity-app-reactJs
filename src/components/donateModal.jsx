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
    width: "50%",
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
          className="absolute"
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
          <div
            style={{
              width: "75%",
            }}
            className="flex"
          >
            <label htmlFor="amount">
              <ButtonComp text="$" hover={false} />
            </label>
            <input type="text" name="amount" id="amount" />
            <ButtonComp
              text="CastomeAmount"
              style={{
                wordBreak: "keep-all",
                marginLeft: "20px",
              }}
            />
          </div>
          <div
            style={{
              width: "75%",
              display: "flex",
              gap: "15px",
              marginTop: "20px",
            }}
          >
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
          <input type="radio" name="gender" value="" id="testDonation" />
          <label htmlFor="testDonation"> Test donation</label>
          <input
            type="radio"
            name="gender"
            value=""
            id="offlineDonation"
            style={{
              marginLeft: "30px",
            }}
          />
          <label htmlFor="offlineDonation"> Offlile Donation</label>
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
            <label for="terms"> Agree to Terms?</label>
          </div>
          <div
            style={{
              width: "50%",
            }}
            className="flex"
          >
            <input
              type="text"
              value={"Donation Total:"}
              disabled
              style={{
                color: "var(--textPrimary)",
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
