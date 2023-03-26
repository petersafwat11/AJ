import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./changeAvatar.module.css";
export const ChangeAvatar = ({
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
  useEffect(() => {
    console.log(newSelectedAvatar);
  }, [newSelectedAvatar]);
  const avatarCategories = ["Avatars", "Flags", "Football", "NBA", "Others"];
  const [avatarCategory, setAvatarCategory] = useState("Avatars");
  const [subCategory, setSubCategory] = useState("");
  const [subSubCategory, setSubSubCategory] = useState("");
  useEffect(() => {
    setSubCategory("");
    setSubSubCategory("");
  }, [avatarCategory]);
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

        <div className={classes["avatars-categories"]}>
          {avatarCategories.map((i, index) => (
            <div
              style={{ backgroundColor: avatarCategory === i ? "#2195f1" : "" }}
              key={index}
              onClick={() => {
                setAvatarCategory(i);
              }}
              className={classes["avatar-category"]}
            >
              {i}
            </div>
          ))}
        </div>
        <div className={classes["avatars"]}>
          {avatarCategory == "Avatars"
            ? avatars.Avatars.map((i, index) => (
                <div
                  style={{
                    background:
                      newSelectedAvatar ==
                      "Avatars/" + Number(Number(index) + 1)
                        ? "url('/svg/chat/background.svg')"
                        : "",
                    backgroundSize:
                      newSelectedAvatar ==
                      "Avatars/" + Number(Number(index) + 1)
                        ? "93%"
                        : "",
                    backgroundRepeat:
                      newSelectedAvatar ==
                      "Avatars/" + Number(Number(index) + 1)
                        ? "no-repeat"
                        : "",
                    backgroundPosition:
                      newSelectedAvatar ==
                      "Avatars/" + Number(Number(index) + 1)
                        ? " bottom"
                        : "",
                  }}
                  onClick={() => {
                    setNewSElectedAvatar(
                      "Avatars/" + Number(Number(index) + 1)
                    );
                    console.log(newSelectedAvatar);
                  }}
                  key={index}
                  className={classes["avatar"]}
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
            : avatarCategory === "NBA"
            ? Object.keys(avatars.NBA).map((i, index) => (
                <>
                  {!Object.keys(avatars.NBA).find((i) => i === subCategory) ? (
                    <div
                      onClick={() => {
                        setSubCategory(i);
                        console.log(
                          `/svg/chat/avatars/${avatarCategory}/${i}/${
                            index + 1
                          }.svg`
                        );
                      }}
                      key={index}
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
                  ) : (
                    avatars.NBA[subCategory].map((i, index) => (
                      <div
                        style={{
                          background:
                            newSelectedAvatar ==
                            "NBA/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "url('/svg/chat/background.svg')"
                              : "",
                          backgroundSize:
                            newSelectedAvatar ==
                            "NBA/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "93%"
                              : "",
                          backgroundRepeat:
                            newSelectedAvatar ==
                            "NBA/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "no-repeat"
                              : "",
                          backgroundPosition:
                            newSelectedAvatar ==
                            "NBA/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? " bottom"
                              : "",
                        }}
                        onClick={() => {
                          setNewSElectedAvatar(
                            "NBA/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                          );
                        }}
                        key={index}
                        className={classes["avatar"]}
                      >
                        {setNewSElectedAvatar ==
                          "NBA/" +
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
                  )}
                </>
              ))
            : avatarCategory === "Flags"
            ? avatars.Flags.map((i, index) => (
                <div
                  style={{
                    background:
                      newSelectedAvatar == "flags/" + Number(Number(index) + 1)
                        ? "url('/svg/chat/background.svg')"
                        : "",
                    backgroundSize:
                      newSelectedAvatar == "flags/" + Number(Number(index) + 1)
                        ? "93%"
                        : "",
                    backgroundRepeat:
                      newSelectedAvatar == "flags/" + Number(Number(index) + 1)
                        ? "no-repeat"
                        : "",
                    backgroundPosition:
                      newSelectedAvatar == "flags/" + Number(Number(index) + 1)
                        ? " bottom"
                        : "",
                  }}
                  onClick={() => {
                    setNewSElectedAvatar("flags/" + Number(Number(index) + 1));
                  }}
                  key={index}
                  className={classes["avatar"]}
                >
                  {setNewSElectedAvatar ==
                    "flags/" + Number(Number(index) + 1) && (
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
            : avatarCategory === "Others"
            ? Object.keys(avatars.Others).map((i, index) => (
                <>
                  {!Object.keys(avatars.Others).find(
                    (i) => i === subCategory
                  ) ? (
                    <div
                      onClick={() => {
                        setSubCategory(i);
                        console.log(
                          `/svg/chat/avatars/${avatarCategory}/${i}/${
                            index + 1
                          }.svg`
                        );
                      }}
                      key={index}
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
                  ) : subCategory !== "NHL" ? (
                    avatars.Others[subCategory].map((i, index) => (
                      <div
                        style={{
                          background:
                            newSelectedAvatar ==
                            "Others/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "url('/svg/chat/background.svg')"
                              : "",
                          backgroundSize:
                            newSelectedAvatar ==
                            "Others/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "93%"
                              : "",
                          backgroundRepeat:
                            newSelectedAvatar ==
                            "Others/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "no-repeat"
                              : "",
                          backgroundPosition:
                            newSelectedAvatar ==
                            "Others/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? " bottom"
                              : "",
                        }}
                        onClick={() => {
                          setNewSElectedAvatar(
                            "Others/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                          );
                        }}
                        key={index}
                        className={classes["avatar"]}
                      >
                        {setNewSElectedAvatar ==
                          "Others/" +
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
                  ) : !Object.keys(avatars.Others.NHL).find(
                      (i) => i === subSubCategory
                    ) ? (
                    Object.keys(avatars.Others.NHL)
                      .slice(0, 2)
                      .map((i, index) => (
                        <div
                          onClick={() => {
                            setSubSubCategory(i);
                            console.log(
                              `/svg/chat/avatars/${avatarCategory}/${subCategory} /${i}/${
                                index + 1
                              }.svg`,
                              Object.keys(avatars.Others.NHL)
                            );
                          }}
                          key={index}
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
                      ))
                  ) : (
                    avatars.Others.NHL[subSubCategory].map((i, index) => (
                      <div
                        style={{
                          background:
                            newSelectedAvatar ==
                            "Others/" +
                              subCategory +
                              "/" +
                              subSubCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "url('/svg/chat/background.svg')"
                              : "",
                          backgroundSize:
                            newSelectedAvatar ==
                            "Others/" +
                              subCategory +
                              "/" +
                              subSubCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "93%"
                              : "",
                          backgroundRepeat:
                            newSelectedAvatar ==
                            "Others/" +
                              subCategory +
                              "/" +
                              subSubCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "no-repeat"
                              : "",
                          backgroundPosition:
                            newSelectedAvatar ==
                            "Others/" +
                              subCategory +
                              "/" +
                              subSubCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? " bottom"
                              : "",
                        }}
                        onClick={() => {
                          setNewSElectedAvatar(
                            "Others/" +
                              subCategory +
                              "/" +
                              subSubCategory +
                              "/" +
                              Number(Number(index) + 1)
                          );
                        }}
                        key={index}
                        className={classes["avatar"]}
                      >
                        {setNewSElectedAvatar ==
                          "Others/" +
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
                    ))
                  )}
                </>
              ))
            : Object.keys(avatars.Football).map((i, index) => (
                <>
                  {!Object.keys(avatars.Football).find(
                    (i) => i === subCategory
                  ) ? (
                    <div
                      onClick={() => {
                        setSubCategory(i);
                        console.log(
                          `/svg/chat/avatars/${avatarCategory}/${i}/${
                            index + 1
                          }.svg`
                        );
                      }}
                      key={index}
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
                  ) : subCategory !== "MLS" ? (
                    avatars.Football[subCategory].map((i, index) => (
                      <div
                        style={{
                          background:
                            newSelectedAvatar ==
                            "Football/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "url('/svg/chat/background.svg')"
                              : "",
                          backgroundSize:
                            newSelectedAvatar ==
                            "Football/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "93%"
                              : "",
                          backgroundRepeat:
                            newSelectedAvatar ==
                            "Football/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "no-repeat"
                              : "",
                          backgroundPosition:
                            newSelectedAvatar ==
                            "Football/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? " bottom"
                              : "",
                        }}
                        onClick={() => {
                          setNewSElectedAvatar(
                            "Football/" +
                              subCategory +
                              "/" +
                              Number(Number(index) + 1)
                          );
                        }}
                        key={index}
                        className={classes["avatar"]}
                      >
                        {setNewSElectedAvatar ==
                          "Football/" +
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
                  ) : !Object.keys(avatars.Football.MLS).find(
                      (i) => i === subSubCategory
                    ) ? (
                    Object.keys(avatars.Football.MLS)
                      .slice(0, 2)
                      .map((i, index) => (
                        <div
                          onClick={() => {
                            setSubSubCategory(i);
                            console.log(
                              `/svg/chat/avatars/${avatarCategory}/${subCategory} /${i}/${
                                index + 1
                              }.svg`,
                              Object.keys(avatars.Football.MLS)
                            );
                          }}
                          key={index}
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
                      ))
                  ) : (
                    avatars.Football.MLS[subSubCategory].map((i, index) => (
                      <div
                        style={{
                          background:
                            newSelectedAvatar ==
                            "Football/" +
                              subCategory +
                              "/" +
                              subSubCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "url('/svg/chat/background.svg')"
                              : "",
                          backgroundSize:
                            newSelectedAvatar ==
                            "Football/" +
                              subCategory +
                              "/" +
                              subSubCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "93%"
                              : "",
                          backgroundRepeat:
                            newSelectedAvatar ==
                            "Football/" +
                              subCategory +
                              "/" +
                              subSubCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? "no-repeat"
                              : "",
                          backgroundPosition:
                            newSelectedAvatar ==
                            "Football/" +
                              subCategory +
                              "/" +
                              subSubCategory +
                              "/" +
                              Number(Number(index) + 1)
                              ? " bottom"
                              : "",
                        }}
                        onClick={() => {
                          setNewSElectedAvatar(
                            "Football/" +
                              subCategory +
                              "/" +
                              subSubCategory +
                              "/" +
                              Number(Number(index) + 1)
                          );
                        }}
                        key={index}
                        className={classes["avatar"]}
                      >
                        {setNewSElectedAvatar ==
                          "Football/" +
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
                    ))
                  )}
                </>
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
