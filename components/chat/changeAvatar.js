import Image from "next/image";
import { useState } from "react";
import classes from "./changeAvatar.module.css";
export const ChangeAvatar = ({ toggleChangeAvatar, selectAvatar }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const applyChanges = () => {
    selectAvatar(`/svg/chat/${selectedAvatar + 1}.svg`);
    toggleChangeAvatar()
  };
  return (
    <div className={classes["change-avatar"]}>
      <div className={classes["change-avatar-top"]}>
        <p className={classes["change-avatar-top-para"]}>Select an avatar</p>
        <Image
          onClick={toggleChangeAvatar}
          src="/svg/chat/exit-chat.svg"
          alt="send"
          width="12"
          height="12"
        />
      </div>
      <div className={classes["avatars"]}>
        <div className={classes["upload"]}>
          <Image
            src="/svg/chat/upload.svg"
            alt="avatar"
            width="35"
            height="33"
          />
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i, index) => (
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
            <Image
              src={`/svg/chat/${index + 1}.svg`}
              alt="avatar"
              width="70"
              height="57"
            />
          </div>
        ))}
      </div>
      <div className={classes["change-avatar-button"]}>
        <button onClick={applyChanges} className={classes["apply-button"]}>
          APPLY
        </button>
      </div>
    </div>
  );
};
