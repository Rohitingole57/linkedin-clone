import React from "react";
import "./HeaderOption.css";
import { Avatar } from '@mui/material'
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
const HeaderOption = ({ avatar, Icon, title, onClick }) => {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="heareOption_icon" />}
      {avatar &&( <Avatar className="heareOption_icon">{user?.email[0]}</Avatar>)}
      <h4 className="headerOption_title">{title}</h4>
    </div>
  );
};

export default HeaderOption;
