import React from "react";
import Button from "../button/button";


const Header = (props) => {

  const telegram = window.Telegram.WebApp;

  const onClose = () => {
    telegram.close()
  };

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>
        {telegram.initDataUnsafe?.user?.username}
      </span>
    </div>
  );
};

export default Header;  