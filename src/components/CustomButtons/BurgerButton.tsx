import React from "react";

import classes from "./BurgerButton.module.css";

const BurgerButton = (props: { toggleDrawer: (value: boolean) => void }) => {
  return (
    <div className={classes.Container} onClick={() => props.toggleDrawer(true)}>
      <div className={classes.InnerContainer}>
        <div className={classes.InnerRow}></div>
      </div>
    </div>
  );
};

export default BurgerButton;
