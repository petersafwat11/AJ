import Image from "next/image";
import React from "react";
import classes from "./staduim.module.css";

const Staduim = () => {
  return (
    <div className={classes["stadium"]}>
      <div className={classes["players"]}>
        {[1, 2, 3, 4, 5, 6].map((horse) => (
          <div key={horse} className={classes["player"]}>
            {horse === 1 || horse == 4 ? (
              <Image
                className={classes["hourse-icon"]}
                src="/svg/watch/horse-racing/brown-horse.svg"
                alt="helmet"
                width="45"
                height="51"
              />
            ) : horse === 2 || horse === 5 ? (
              <Image
                className={classes["hourse-icon"]}
                src="/svg/watch/horse-racing/white-horse.svg"
                alt="helmet"
                width="45"
                height="51"
              />
            ) : (
              <Image
                className={classes["hourse-icon"]}
                src="/svg/watch/horse-racing/yellow-horse.svg"
                alt="helmet"
                width="45"
                height="51"
              />
            )}
            <p className={classes["player-name"]}>loram</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staduim;
