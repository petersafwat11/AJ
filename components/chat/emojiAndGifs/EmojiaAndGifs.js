// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";
import GifPicker from "gif-picker-react";
import React, { useEffect, useState } from "react";
import EmojiPicker from "./Emojies";
import classes from "./emogiAndGifs.module.css";

const EmojiaAndGifs = ({
  emojyOrGifs,
  chooseGifOrEmojies,
  setInputMessage,
  message,
  displayEmojisAndGifs,
}) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: "",
    height: "",
  });
  const handleResize = () => {
    setWindowDimensions({
      width: window.screen.width,
      height: window.screen.height,
    });
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const onSelectEmojie = (emoji) => {
    console.log("emoji", emoji);
    setInputMessage(message + emoji);
  };
  return (
    <div
      style={{ paddingBottom: emojyOrGifs === "gifs" ? "0" : "" }}
      id="emojies-gifs"
      className={classes["emojies-gifs"]}
    >
      <div className={classes["space"]}></div>
      {emojyOrGifs == "emojy" && <div className={classes["space-2"]}></div>}
      <img
        onClick={displayEmojisAndGifs}
        className={classes["exit-emojy"]}
        src="/svg/exit-emojy.svg"
        alt="exit"
        height="14"
        width="14"
      />
      <div className={classes["emojies-gifs-top"]}>
        <p
          className={
            classes[emojyOrGifs == "emojy" ? "option" : "option-selected"]
          }
          onClick={() => {
            chooseGifOrEmojies("emojy");
          }}
        >
          Emojis
        </p>
        <p
          className={
            classes[emojyOrGifs == "gifs" ? "option" : "option-selected"]
          }
          onClick={() => {
            chooseGifOrEmojies("gifs");
          }}
        >
          GIFs
        </p>
      </div>
      {/* {emojyOrGifs === "emojy" && (
        <Picker
          navPosition="none"
          className={classes["emojy-picker"]}
          data={data}
          theme="dark"
          previewPosition="none"
          perLine={windowDimensions.width < 900 ? 6 : 9}
          onEmojiSelect={(e) => {
            setInputMessage(message + e.native);
          }}
        />
      )} */}
      {emojyOrGifs === "emojy" && <EmojiPicker onSelect={onSelectEmojie} />}
      {emojyOrGifs === "gifs" && (
        <GifPicker
          tenorApiKey={"AIzaSyC8EsPMPT17ZCZHFdKpQg9z0i8BgEr29eE"}
          theme="dark"
          onGifClick={(TenorImage) => {
            setInputMessage(TenorImage);
          }}
        />
      )}
    </div>
  );
};

export default EmojiaAndGifs;
