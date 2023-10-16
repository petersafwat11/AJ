import Image from "next/image";
import React from "react";
import classes from "./method.module.css";
const Method = ({ name, width, height }) => {
  return (
    <div className={classes[name]}>
      <Image
        src={`/svg/donate/${name}.svg`}
        alt="paypall"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Method;
