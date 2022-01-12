import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import Logo from "./Tinder_logo_PNG3.png";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img className="header__logo" src={Logo} alt="" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
