import Image from "next/image";
import { useState } from "react";
import classes from "./changeAvatar.module.css";
export const ChangeAvatar = ({
  toggleChangeAvatar,
  selectAvatar,
  avatars,
  selectedAvatar,
}) => {
  const [newSelectedAvatar, setNewSElectedAvatar] = useState();
  const applyChanges = () => {
    selectAvatar(`/svg/chat/avatars/${newSelectedAvatar + 1}.svg`);
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
                  newSelectedAvatar == index
                    ? "url('/svg/chat/background.svg')"
                    : "",
                backgroundSize: newSelectedAvatar == index ? "93%" : "",
                backgroundRepeat: newSelectedAvatar == index ? "no-repeat" : "",
                backgroundPosition: newSelectedAvatar == index ? " bottom" : "",
              }}
              onClick={() => {
                setNewSElectedAvatar(index);
              }}
              key={index}
              className={classes["avatar"]}
            >
              {setNewSElectedAvatar == index && (
                <Image
                  className={classes["checked-icon"]}
                  src="/svg/chat/check.svg"
                  alt="avatar"
                  width="21"
                  height="21"
                />
              )}
              <Image
                src={`/svg/chat/avatars/${index + 1}.svg`}
                alt="avatar"
                width="57"
                height="57"
              />
            </div>
          ))}
        </div>
        <div className={classes["actions"]}>
          <button onClick={applyChanges} className={classes["apply-button"]}>
            Apply
          </button>
          <button
            onClick={toggleChangeAvatar}
            className={classes["cancel-button"]}
          >
            Cancel{" "}
          </button>
        </div>
      </div>
      <div className={classes["change-avatars-second"]}>
        <Image
          className={classes["exit"]}
          onClick={toggleChangeAvatar}
          src="svg/chat/change-avatar/exit.svg"
          alt="send"
          width="12"
          height="12"
        />
        <div className={classes["selected-avatar"]}>
          <div className={classes["new-selected-image"]}>
            {newSelectedAvatar ? (
              <img
                src={`/svg/chat/avatars/${newSelectedAvatar + 1}.svg`}
                alt="avatar"
                width="114"
              />
            ) : (
              <img src={selectedAvatar} alt="avatar" width="114" />
            )}
          </div>

          <p>Your selected avatar</p>
        </div>
      </div>
    </div>
  );
};
