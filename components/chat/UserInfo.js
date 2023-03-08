import Image from "next/image";
import classes from "./userInfo.module.css";

const UserInfo = ({ toggleChangeAvatar, selectedAvatar }) => {

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
      </div>
      <div className={classes["user-info-body"]}>
        <p className={classes["user-info-para"]}>Your Display Name</p>
        <div className={classes["user-data"]}>
          <input
            className={classes["user-data-input"]}
            type="text"
            placeholder="Enter username...."
          />
        </div>
        <p className={classes["taken-message"]}>Username taken</p>
      </div>
      <div className={classes["user-info-actions"]}>
        <button className={classes["confirm-button"]}>Confirm </button>
        <button className={classes["cancel-button"]}>cancel </button>
      </div>
    </div>
  );
};
export default UserInfo;
