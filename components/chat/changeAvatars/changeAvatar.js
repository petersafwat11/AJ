import Image from "next/image";
import { useState } from "react";
import Popup from "../../popupWrapper/Popup";
import ImageUploader from "./../imageUpload/ImageUpload";
import classes from "./changeAvatar.module.css";

const ChangeAvatar = ({
  toggleChangeAvatar,
  selectAvatar,
  avatars,
  selectedAvatar,
}) => {
  const [newSelectedAvatar, setNewSElectedAvatar] = useState();
  const applyChanges = () => {
    selectAvatar(`/svg/chat/avatars/${newSelectedAvatar}.svg`);
    toggleChangeAvatar();
  };
  // useEffect(() => {
  //   console.log(newSelectedAvatar);
  // }, [newSelectedAvatar]);
  const avatarCategories = ["Avatars", "Flags", "Football", "NBA", "Others"];
  const [avatarCategory, setAvatarCategory] = useState("Avatars");
  const [subCategory, setSubCategory] = useState("");
  const [subSubCategory, setSubSubCategory] = useState("");
  // useEffect(() => {
  //   setSubCategory("");
  //   setSubSubCategory("");
  // }, [avatarCategory]);
  const [imageUpload, setShowImageUpload] = useState(false);
  return (
    <div className={classes["change-avatar"]}>
      {imageUpload && (
        <Popup>
          <ImageUploader />
        </Popup>
      )}
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
            Drag and drop file or
            <span
              onClick={() => {
                setShowImageUpload(!imageUpload);
              }}
            >
              browse computer
            </span>
          </p>
        </div>

        <div className={classes["avatars-categories"]}>
          {avatarCategories.map((i, index) => (
            <div
              style={{ backgroundColor: avatarCategory === i ? "#2195f1" : "" }}
              key={index}
              onClick={() => {
                setSubCategory(null);
                setSubSubCategory(null);
                setAvatarCategory(i);
              }}
              className={classes["avatar-category"]}
            >
              {i}
            </div>
          ))}
        </div>
        <div className={classes["avatars"]}>
          {(avatarCategory && subCategory, subSubCategory)
            ? avatars[avatarCategory][subCategory][subSubCategory].map(
                (i, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setNewSElectedAvatar(
                        "Avatars/" +
                          subCategory +
                          subSubCategory +
                          Number(Number(index) + 1)
                      );
                      // console.log(newSelectedAvatar);
                    }}
                    className={
                      newSelectedAvatar ==
                      "Avatars/" +
                        subCategory +
                        subSubCategory +
                        Number(Number(index) + 1)
                        ? classes["clicked-avatar"]
                        : classes["avatar"]
                    }
                  >
                    {setNewSElectedAvatar ==
                      "Avatars/" +
                        subCategory +
                        subSubCategory +
                        Number(Number(index) + 1) && (
                      <Image
                        className={classes["checked-icon"]}
                        src="/svg/chat/check.svg"
                        alt="avatar"
                        width="21"
                        height="21"
                      />
                    )}
                    <Image
                      onClick={() => {
                        console.log(
                          avatarCategory,
                          subCategory,
                          subSubCategory
                        );
                      }}
                      className={classes["avatar-icon"]}
                      src={`/svg/chat/avatars/${avatarCategory}/${subCategory}/${subSubCategory}/${
                        index + 1
                      }.svg`}
                      alt="avatar"
                      width="57"
                      height="57"
                    />
                  </div>
                )
              )
            : avatarCategory && subCategory
            ? Array.isArray(avatars[avatarCategory][subCategory])
              ? avatars[avatarCategory][subCategory].map((i, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setNewSElectedAvatar(
                        "Avatars/" + subCategory + Number(Number(index) + 1)
                      );
                      // console.log(newSelectedAvatar);
                    }}
                    className={
                      newSelectedAvatar ==
                      "Avatars/" + subCategory + Number(Number(index) + 1)
                        ? classes["clicked-avatar"]
                        : classes["avatar"]
                    }
                  >
                    {setNewSElectedAvatar ==
                      "Avatars/" + subCategory + Number(Number(index) + 1) && (
                      <Image
                        className={classes["checked-icon"]}
                        src="/svg/chat/check.svg"
                        alt="avatar"
                        width="21"
                        height="21"
                      />
                    )}
                    <Image
                      className={classes["avatar-icon"]}
                      src={`/svg/chat/avatars/${avatarCategory}/${subCategory}/${
                        index + 1
                      }.svg`}
                      alt="avatar"
                      width="57"
                      height="57"
                    />
                  </div>
                ))
              : Object.keys(avatars[avatarCategory][subCategory]).map(
                  (i, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSubSubCategory(i);
                      }}
                      className={classes["sub-category"]}
                    >
                      <Image
                        src="svg/chat/change-avatar/folder-icon.svg"
                        alt="folder-icon"
                        width="67"
                        height="54"
                      />
                      <p>{i}</p>
                    </div>
                  )
                )
            : Array.isArray(avatars[avatarCategory])
            ? avatars[avatarCategory].map((i, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setNewSElectedAvatar(
                      "Avatars/" + Number(Number(index) + 1)
                    );
                    // console.log(newSelectedAvatar);
                  }}
                  className={
                    newSelectedAvatar == "Avatars/" + Number(Number(index) + 1)
                      ? classes["clicked-avatar"]
                      : classes["avatar"]
                  }
                >
                  {setNewSElectedAvatar ==
                    "Avatars/" + Number(Number(index) + 1) && (
                    <Image
                      className={classes["checked-icon"]}
                      src="/svg/chat/check.svg"
                      alt="avatar"
                      width="21"
                      height="21"
                    />
                  )}
                  <Image
                    className={classes["avatar-icon"]}
                    src={`/svg/chat/avatars/${avatarCategory}/${index + 1}.svg`}
                    alt="avatar"
                    width="57"
                    height="57"
                  />
                </div>
              ))
            : Object.keys(avatars[avatarCategory]).map((i, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSubCategory(i);
                  }}
                  className={classes["sub-category"]}
                >
                  <Image
                    src="svg/chat/change-avatar/folder-icon.svg"
                    alt="folder-icon"
                    width="67"
                    height="54"
                  />
                  <p>{i}</p>
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
                className={classes["selected-avatar-icon"]}
                src={`/svg/chat/avatars/${newSelectedAvatar}.svg`}
                alt="avatar"
                width="114"
              />
            ) : (
              <img
                className={classes["selected-avatar-icon"]}
                src={selectedAvatar}
                alt="avatar"
                width="114"
              />
            )}
          </div>

          <p>Your selected avatar</p>
        </div>
      </div>
    </div>
  );
};
export default ChangeAvatar;
