import Image from "next/image";
import { useState } from "react";
import Popup from "../../popupWrapper/Popup";
import ImageUploader from "./../imageUpload/ImageUpload";
import { Actions, TopPart } from "./TopAndBottom";
import classes from "./changeAvatar.module.css";
import RightPart from "./rightPart";

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
  const avatarCategories = ["Avatars", "Flags", "Football", "NBA", "Others"];
  const [avatarCategory, setAvatarCategory] = useState("Avatars");
  const [subCategory, setSubCategory] = useState("");
  const [subSubCategory, setSubSubCategory] = useState("");
  const [imageUpload, setShowImageUpload] = useState(false);
  const toggleImageUpload = () => {
    setShowImageUpload(!imageUpload);
  };
  return (
    <div className={classes["change-avatar"]}>
      {imageUpload && (
        <Popup>
          <ImageUploader />
        </Popup>
      )}
      <div className={classes["change-avatars-first"]}>
        <TopPart
          toggleChangeAvatar={toggleChangeAvatar}
          toggleImageUpload={toggleImageUpload}
        />
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
                        avatarCategory +
                          "/" +
                          subCategory +
                          "/" +
                          subSubCategory +
                          "/" +
                          Number(Number(index) + 1)
                      );
                      // console.log(newSelectedAvatar);
                    }}
                    className={
                      newSelectedAvatar ==
                      avatarCategory +
                        "/" +
                        subCategory +
                        "/" +
                        subSubCategory +
                        "/" +
                        Number(Number(index) + 1)
                        ? classes["clicked-avatar"]
                        : classes["avatar"]
                    }
                  >
                    {newSelectedAvatar ==
                      avatarCategory +
                        "/" +
                        subCategory +
                        "/" +
                        subSubCategory +
                        "/" +
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
                        avatarCategory +
                          "/" +
                          subCategory +
                          "/" +
                          Number(index + 1)
                      );
                      console.log(newSelectedAvatar, "//");
                    }}
                    className={
                      newSelectedAvatar ==
                      avatarCategory +
                        "/" +
                        subCategory +
                        "/" +
                        Number(Number(index) + 1)
                        ? classes["clicked-avatar"]
                        : classes["avatar"]
                    }
                  >
                    {newSelectedAvatar ==
                      avatarCategory +
                        "/" +
                        subCategory +
                        "/" +
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
                      avatarCategory + "/" + Number(Number(index) + 1)
                    );
                    console.log(newSelectedAvatar);
                  }}
                  className={
                    newSelectedAvatar ==
                    avatarCategory + "/" + Number(Number(index) + 1)
                      ? classes["clicked-avatar"]
                      : classes["avatar"]
                  }
                >
                  {newSelectedAvatar ==
                    avatarCategory + "/" + Number(Number(index) + 1) && (
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
                    console.log(i);
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

        <Actions
          applyChanges={applyChanges}
          toggleChangeAvatar={toggleChangeAvatar}
        />
      </div>
      <RightPart
        toggleChangeAvatar={toggleChangeAvatar}
        newSelectedAvatar={newSelectedAvatar}
        selectedAvatar={selectedAvatar}
      />
    </div>
  );
};
export default ChangeAvatar;