import React from "react";
import Button from "../Button/button";
import { useTelegram } from "../../hooks/useTelegram";
import './header.css'

const Header = (props) => {
  const {telegram, onClose, user} = useTelegram();

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>
        {user}
      </span>
    </div>
  );
};

export default Header;  