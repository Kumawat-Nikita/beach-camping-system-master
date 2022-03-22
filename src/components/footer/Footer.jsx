import { Copyright } from "@mui/icons-material";
import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerCopyright">
        <Copyright className="footerIcon" />
        <span className="footerText">
          2022 by Beach Camping System. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
