import React from "react";
import classes from "./serverButtons.module.css";
const ServersButtons = ({ servers }) => {
  return (
    <div className={classes["container"]}>
      {servers.map((item, index) => (
        <div key={index} className={classes["lang"]}>
          {/* {item ==='العربية' ? <p>{item} <p/>: <p>
            {item}</p>} */}
        </div>
      ))}
    </div>
  );
};

export default ServersButtons;
