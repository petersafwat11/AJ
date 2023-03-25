// import times from "lodash/times";
// import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
// import classes from './marque.module.css'
// const Marque = () => {
//   return (
//     <div className={classes['marque']} >
//       <Marquee
//         velocity={12}
//         minScale={0.7}
//         resetAfterTries={200}
//         scatterRandomly
//       >
//         {times(5, Number).map((id) => (
//           <Motion
//             key={`child-${id}`}
//             initDeg={randomIntFromInterval(0, 360)}
//             // direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
//             velocity={10}
//             radius={50}
//           >
//             <div
//             // style={{
//             //   width: "50px",
//             //   height: "50px",
//             //   borderRadius: "50%",
//             //   backgroundColor: "yellow",
//             //   textAlign: "center",
//             //   lineHeight: "50px",
//             // }}
//             >
//               {id}
//             </div>
//           </Motion>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default Marque;
import React from "react";
import Marquee from "react-fast-marquee";
import classes from "./marque.module.css";

const Marque = () => {
  return (
    <>
      <div className={classes["marque-container"]}>
        <Marquee
          speed={20}
          gradientWidth={50}
          gradientColor={[0.2, 0.7, 0.5]}
          gradient={false}
        >
          <div className={classes["marque-container-tag"]}>
            <span>Alternative Domains -</span>
            <p>www.ajsports.pro</p>
            <p>www.ajsports.soccer</p>
            <p>www.ajsports.us</p>
            <p>www.ajsportstv.ch</p>
            <p>www.ajsports.vip</p>
            <p>www.ajsports.watch</p>
            <p>www.ajsports.xyz</p>
            <p>www.ajsports.app</p>
            <p>www.ajsports.football</p>
            <p>www.ajsports.cc</p>
            <p>www.ajsports.games</p>
            <p>www.ajsports.info</p>
            <p>www.ajsports.io</p>
            <p>www.ajsports.life</p>
            <p>www.ajsports.gay</p>
            <p>www.ajsports.asia</p>
            <p>www.ajsports.lol</p>
            <p>www.9goaltv.us</p>
            <p>www.9goal.app</p>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Marque;
