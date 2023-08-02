"use client";

import React, { useReducer, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import classes from "./serversAndLanguages.module.css";
function generateArray(num) {
  return Array.from(Array(num), (_, index) => index + 1);
}

const serversReducer = (state, action) => {
  if (action.lang === "ENGLISH") {
    if (action.type === "CHECKBOX") {
      return {
        ...state,
        english: { checked: action.value, channels: [], num: 0 },
      };
    } else if (action.type === "NUM") {
      let serversNames = generateArray(action.value)
        .map((num) => `server-${num}`)
        .map((name) => ({ name: name, serverValue: "" }));

      return {
        ...state,
        english: {
          ...state.english,
          channels: serversNames,
          num: action.value,
        },
      };
    } else {
      let newServers = state.english.channels.filter(
        (server) => server.name !== action.value.name
      );
      newServers.push({
        name: action.value.name,
        serverValue: action.value.serverValue,
      });
      console.log(newServers);

      return {
        ...state,
        english: {
          ...state.english,
          channels: newServers,
        },
      };
    }
  } else if (action.lang === "ARABIC") {
    if (action.type === "CHECKBOX") {
      return {
        ...state,
        arabic: { checked: action.value, channels: [], num: 0 },
      };
    } else if (action.type === "NUM") {
      let serversNames = generateArray(action.value)
        .map((num) => `server-${num}`)
        .map((name) => ({ name: name, serverValue: "" }));

      return {
        ...state,
        arabic: {
          ...state.arabic,
          channels: serversNames,
          num: action.value,
        },
      };
    } else {
      let newServers = state.arabic.channels.filter(
        (server) => server.name !== action.value.name
      );
      newServers.push({
        name: action.value.name,
        serverValue: action.value.serverValue,
      });

      return {
        ...state,
        arabic: {
          ...state.arabic,
          channels: newServers,
        },
      };
    }
  } else if (action.lang === "SPANISH") {
    if (action.type === "CHECKBOX") {
      return {
        ...state,
        spanish: { checked: action.value, channels: [], num: 0 },
      };
    } else if (action.type === "NUM") {
      let serversNames = generateArray(action.value)
        .map((num) => `server-${num}`)
        .map((name) => ({ name: name, serverValue: "" }));

      return {
        ...state,
        spanish: {
          ...state.spanish,
          channels: serversNames,
          num: action.value,
        },
      };
    } else {
      let newServers = state.spanish.channels.filter(
        (server) => server.name !== action.value.name
      );
      newServers.push({
        name: action.value.name,
        serverValue: action.value.serverValue,
      });

      return {
        ...state,
        spanish: {
          ...state.spanish,
          channels: newServers,
        },
      };
    }
  } else {
    return { ...state };
  }
};
const otherServersReducer = (state, action) => {
  if (action.type === "CHECKBOX") {
    console.log("other-langs", action.value);

    return {
      checked: action.value,
      num: 0,
      otherLangs: [],
    };
  } else if (action.type == "NUM") {
    let otherLangs = generateArray(action.value).map((lang, index) => ({
      index: index + 1,
      name: "",
      num: null,
      channels: [],
    }));
    console.log("other-langs", otherLangs, action.value);
    return {
      ...state,
      num: action.value,
      otherLangs: otherLangs,
    };
  } else if (action.type == "SERVER-NAME") {
    let newLangs = state.otherLangs.filter(
      (server) => server.index !== action.value.index
    );

    let changedLang = state.otherLangs.find(
      (item) => item.index == action.value.index
    );
    changedLang = { ...changedLang, name: action.value.name };
    newLangs.push(changedLang);
    console.log(newLangs, changedLang, "name");
    return {
      ...state,
      otherLangs: newLangs,
    };
  } else if (action.type == "SERVER-NUM") {
    let newLangs = state.otherLangs.filter(
      (server) => server.index !== action.value.index
    );

    let changedLangChannels = generateArray(action.value.num)
      .map((num) => `server-${num}`)
      .map((name) => ({ name: name, value: "" }));
    let changedLang = state.otherLangs.find(
      (server) => server.index == action.value.index
    );
    changedLang = {
      num: action.value.num,
      index: action.value.index,
      channels: changedLangChannels,
      name: changedLang.name,
    };
    newLangs.push(changedLang);
    console.log(changedLang, newLangs, "ss");

    return {
      ...state,
      otherLangs: newLangs,
    };
  } else if (action.type == "SERVER-CHANNELS") {
    let newLangs = state.otherLangs.filter(
      (server) => server.index !== action.value.index
    );
    let changedLang = state.otherLangs.find(
      (item) => item.index == action.value.index
    );

    let newLangChannels = changedLang.channels.filter(
      (server) => server.name != action.value.name
    );
    let changedChannel = changedLang.channels.find(
      (server) => server.name == action.value.name
    );
    console.log(
      newLangs,
      newLangChannels,
      action.value.name,
      changedChannel,
      "channel-1"
    );

    changedChannel = { ...changedChannel, value: action.value.serverValue };
    newLangChannels.push(changedChannel);
    changedLang.channels = newLangChannels;
    newLangs.push(changedLang);
    console.log(newLangs, newLangChannels, changedChannel, "channel");
    return {
      ...state,
      otherLangs: newLangs,
    };
  } else {
    return { ...state };
  }
};
const ServersAndLanguages = () => {
  const [checked, setChecked] = useState(false);
  const [servers, dispatchServer] = useReducer(serversReducer, {
    english: { checked: false, num: null, channels: [] },
    arabic: { checked: false, num: null, channels: [] },
    spanish: { checked: false, num: null, channels: [] },
  });
  const [otherServers, dispatchOtherServer] = useReducer(otherServersReducer, {
    checked: false,
    num: null,
    otherLangs: [],
  });

  return (
    <div className={classes["container"]}>
      <h3 className={classes["title"]}>Servers & Languages</h3>
      <div className={classes["langs"]}>
        {["English", "Arabic", "Spanish"].map((lang, index) => (
          <div key={lang} className={classes["lang"]}>
            <p className={classes["lang-name"]}>{lang}</p>
            <div className={classes["toggler-wrapper"]}>
              <label className={classes["toggle"]}>
                <input
                  onChange={(e) => {
                    dispatchServer({
                      type: "CHECKBOX",
                      lang: lang.toLocaleUpperCase(),
                      value: !servers[lang.toLowerCase()].checked,
                    });
                  }}
                  className={classes["toggle-checkbox"]}
                  type="checkbox"
                />
                <div className={classes["toggle-switch"]}></div>
              </label>
            </div>
            <p className={classes["servers-para"]}>Servers:</p>
            <input
              type="number"
              min={0}
              max={5}
              onChange={(e) => {
                dispatchServer({
                  type: "NUM",
                  lang: lang.toLocaleUpperCase(),
                  value: Number(e.target.value),
                });
              }}
              className={classes["servers-num-input"]}
            />
            <BsArrowRight className={classes["arrow"]} />
            {servers[lang.toLowerCase()].checked ? (
              <div className={classes["servers"]}>
                {generateArray(servers[lang.toLocaleLowerCase()].num).map(
                  (serverNum) => (
                    <div key={serverNum} className={classes["input-group"]}>
                      <label htmlFor="first-team" className={classes["label"]}>
                        {serverNum}
                      </label>
                      <input
                        value={
                          servers[lang.toLowerCase()].channels.find(
                            (server) => server.name == "server-" + serverNum
                          ).serverValue
                        }
                        onChange={(e) => {
                          dispatchServer({
                            type: "SERVER",
                            lang: lang.toLocaleUpperCase(),
                            value: {
                              name: "server-" + serverNum,
                              serverValue: e.target.value,
                            },
                          });
                        }}
                        placeholder={`server-${serverNum}`}
                        className={classes["input"]}
                      />
                    </div>
                  )
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className={classes["other"]}>
        <p className={classes["lang-name"]}>other</p>
        <div className={classes["toggler-wrapper"]}>
          <label className={classes["toggle"]}>
            <input
              onChange={(e) => {
                dispatchOtherServer({
                  type: "CHECKBOX",
                  value: !otherServers.checked,
                });
              }}
              className={classes["toggle-checkbox"]}
              type="checkbox"
            />
            <div className={classes["toggle-switch"]}></div>
          </label>
        </div>
        <p className={classes["servers-para"]}>buttons:</p>
        <input
          type="number"
          min={0}
          max={5}
          onChange={(e) => {
            dispatchOtherServer({
              type: "NUM",
              value: Number(e.target.value),
            });
          }}
          className={classes["servers-num-input"]}
        />
      </div>
      {otherServers.checked &&
        otherServers.num > 0 &&
        otherServers.otherLangs.map((lang, index) => (
          <div key={index} className={classes["other-lange"]}>
            <div className={classes["input-group"]}>
              <label className={classes["label"]}>Lang Name</label>
              <input
                value={
                  otherServers.otherLangs.find(
                    (lang) => lang.index == index + 1
                  ).name
                }
                onChange={(e) => {
                  dispatchOtherServer({
                    type: "SERVER-NAME",
                    value: { name: e.target.value, index: index + 1 },
                  });
                }}
                type="text"
                className={classes["input"]}
              />
            </div>
            <input
              type="number"
              min={0}
              max={5}
              value={((lang) => lang.index == index + 1).num}
              onChange={(e) => {
                dispatchOtherServer({
                  type: "SERVER-NUM",
                  value: { num: Number(e.target.value), index: index + 1 },
                });
              }}
              className={classes["other-servers-num-input"]}
            />
            <BsArrowRight className={classes["arrow"]} />
            {otherServers.otherLangs.find((lang) => lang.index == index + 1)
              .num > 0 ? (
              <div className={classes["servers"]}>
                {generateArray(
                  otherServers.otherLangs.find(
                    (lang) => lang.index == index + 1
                  ).num
                ).map((serverNum) => (
                  <div key={serverNum} className={classes["input-group"]}>
                    <label htmlFor="first-team" className={classes["label"]}>
                      {serverNum}
                    </label>
                    <input
                      value={
                        otherServers.otherLangs
                          .find((lang) => lang.index == index + 1)
                          .channels.find(
                            (server) => server.name == "server-" + serverNum
                          ).value
                      }
                      onChange={(e) => {
                        dispatchOtherServer({
                          type: "SERVER-CHANNELS",
                          value: {
                            name: `server-${serverNum}`,
                            index: index + 1,
                            serverValue: e.target.value,
                          },
                        });
                      }}
                      placeholder={`server-${serverNum}`}
                      className={classes["input"]}
                    />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
    </div>
  );
};

export default ServersAndLanguages;
