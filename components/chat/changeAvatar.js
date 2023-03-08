import Image from "next/image";
import { useState } from "react";
import classes from "./changeAvatar.module.css";
export const ChangeAvatar = ({ toggleChangeAvatar, selectAvatar, avatars }) => {
  const [selectedAvatar, setSelectedAvatar] = useState();
  const applyChanges = () => {
    selectAvatar(`/svg/chat/change-avatars/${selectedAvatar + 1}.svg`);
    toggleChangeAvatar();
  };

  return (
    <div className={classes["change-avatar"]}>
      <div className={classes["change-avatars-first"]}>
        <div className={classes["change-avatar-text"]}>
          <h3 className={classes["title"]}>Select an avatar</h3>
          <p className={classes["para"]}>
            Choose an avatar to be displayed on your profile picture.
          </p>
        </div>
        <div className={classes["file-pload-wrapper"]}>
          <Image
            className={classes["upload-icon"]}
            onClick={toggleChangeAvatar}
            src="/svg/chat/change-avatar/upload.svg"
            alt="upload"
            width="15"
            height="18"
          />
          <p className={classes["file-upload-para"]}>
            Drag and drop file or<span>browse computer</span>
          </p>
        </div>
        <div className={classes["avatars"]}>
          {avatars.map((i, index) => (
            <div
              style={{
                background:
                  selectedAvatar == index
                    ? "url('/svg/chat/background.svg')"
                    : "",
                backgroundSize: selectedAvatar == index ? "100%" : "",
                backgroundRepeat: selectedAvatar == index ? "no-repeat" : "",
                backgroundPosition: selectedAvatar == index ? "top" : "",
              }}
              onClick={() => {
                setSelectedAvatar(index);
              }}
              key={index}
              className={classes["avatar"]}
            >
              {selectedAvatar == index && (
                <Image
                  className={classes["checked-icon"]}
                  src="/svg/chat/check.svg"
                  alt="avatar"
                  width="21"
                  height="21"
                />
              )}
              <img
                src={`/svg/chat/avatars/${index + 1}.svg`}
                alt="avatar"
                width="57"
              />
            </div>
          ))}
        </div>
        <div className={classes["actions"]}>
          <button> Apply</button>
          <button>Cancel </button>
        </div>
      </div>
      <div className={classes["change-avatars-second"]}>
        <Image
          className={classes["exit"]}
          onClick={toggleChangeAvatar}
          src="/svg/chat/change-avatar/exit.svg"
          alt="send"
          width="12"
          height="12"
        />
        <div className={classes["selected-avatar"]}>
          <img src={selectedAvatar} alt="avatar" width="114" />
          <p>Your selected avatar</p>
        </div>
      </div>
    </div>
  );
};
