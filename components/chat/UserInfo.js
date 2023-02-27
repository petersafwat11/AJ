import Image from "next/image";
import classes from "./userInfo.module.css";

const UserInfo = ({ toggleChangeAvatar, selectedAvatar, toggleUserInf }) => {
  return (
    <div className={classes["user-info"]}>
      <div className={classes["user-info-top"]}>
        <div className={classes["user-info-top-first"]}>
          <Image src={selectedAvatar} alt="avatar" width="50" height="57" />
          <button
            onClick={toggleChangeAvatar}
            className={classes["change-button"]}
          >
            CHANGE
          </button>
        </div>

        <Image
          onClick={toggleUserInf}
          src="/svg/chat/exit-chat.svg"
          alt="send"
          width="12"
          height="12"
        />
      </div>
      <div className={classes["user-info-body"]}>
        <p className={classes["user-info-para"]}>Display Name</p>
        <div className={classes["user-data"]}>
          <input
            className={classes["user-data-input"]}
            type="text"
            placeholder="Enter username...."
          />
          <button className={classes["user-data-button"]}>CONFIRM</button>
        </div>
        <p className={classes["taken-message"]}>Username taken</p>
      </div>
    </div>
  );
};
export default UserInfo;
