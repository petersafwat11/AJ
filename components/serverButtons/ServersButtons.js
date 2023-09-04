import React from "react";
import classes from "./serverButtons.module.css";
const ServersButtons = ({ servers }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["langs"]}>
        {servers.map((item, index) => (
          <div key={index} className={classes["lang"]}>
            {/* {item === "العربية" ? ( */}
              <p className={classes["lang-text"]}>{item} </p>
            {/* ) : (
              <p className={classes["other-lang"]}>{item}</p>
            )} */}
          </div>
        ))}
      </div>
      {/* <div className={classes['arrow']}>

      </div> */}
    </div>
  );
};

export default ServersButtons;
