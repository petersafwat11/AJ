"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { generateArray } from "../../../../utils/generateArrayOfNumbers";
import classes from "./serversAndLanguages.module.css";
const ServersAndLanguages = ({
  streamLinksAvaiable,
  servers,
  dispatchServer,
  otherServers,
  dispatchOtherServer,
}) => {
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
                  checked={servers[lang.toLocaleLowerCase()]?.checked}
                  onChange={(e) => {
                    dispatchServer({
                      type: "CHECKBOX",
                      lang: lang?.toLocaleUpperCase(),
                      value: !servers[lang.toLowerCase()]?.checked,
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
              value={servers[lang.toLocaleLowerCase()]?.num}
              onChange={(e) => {
                dispatchServer({
                  type: "NUM",
                  lang: lang?.toLocaleUpperCase(),
                  value: Number(e.target.value),
                });
              }}
              className={classes["servers-num-input"]}
            />
            <BsArrowRight className={classes["arrow"]} />
            {servers[lang.toLowerCase()]?.checked ? (
              <div className={classes["servers"]}>
                {generateArray(servers[lang.toLocaleLowerCase()]?.num).map(
                  (serverNum) => (
                    <div key={serverNum} className={classes["input-group"]}>
                      <label htmlFor="first-team" className={classes["label"]}>
                        {serverNum}
                      </label>
                      <input
                        value={
                          servers[lang.toLowerCase()]?.channels?.find(
                            (server) => server.name == "server-" + serverNum
                          ).serverValue?.name
                        }
                        // onChange={(e) => {
                        //   dispatchServer({
                        //     type: "SERVER",
                        //     lang: lang.toLocaleUpperCase(),
                        //     value: {
                        //       name: "server-" + serverNum,
                        //       serverValue: e.target.value,
                        //     },
                        //   });
                        // }}
                        readOnly
                        placeholder={`server-${serverNum}`}
                        className={classes["input"]}
                      />
                      {streamLinksAvaiable?.length > 0 && (
                        <div className={classes["search-options"]}>
                          {streamLinksAvaiable?.map((item, index) => (
                            <p
                              onClick={() => {
                                dispatchServer({
                                  type: "SERVER",
                                  lang: lang.toLocaleUpperCase(),
                                  value: {
                                    name: "server-" + serverNum,
                                    streamLinkName: item?.streamLinkName,
                                    streamLinkUrl: item?.streamLinkUrl,
                                  },
                                });
                              }}
                              style={{
                                background:
                                  index % 2 === 0 ? "inherit" : "#F5F5F5",
                              }}
                              key={`${item?.streamLinkUrl}-${index}`}
                              className={
                                classes[
                                  item.streamLinkName ===
                                  servers[lang.toLowerCase()].channels.find(
                                    (server) =>
                                      server.name == "server-" + serverNum
                                  ).serverValue?.name
                                    ? "option"
                                    : "selected-option"
                                ]
                              }
                            >
                              {item?.streamLinkName}
                            </p>
                          ))}
                        </div>
                      )}
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
              checked={otherServers.checked}
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
          value={otherServers.num}
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
              value={
                otherServers.otherLangs.find((lang) => lang.index == index + 1)
                  .num
              }
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
