"use client";

import axios from "axios";
import React, { useReducer, useState } from "react";
import Popup from "../../../popupWrapper/Popup";
import MakePoll from "../makePoll/MakePoll";
import classes from "./poll.module.css";

const intialValue = [
  { name: "Time", value: "" },
  { name: "Question", value: "" },
  { name: "Input 1", value: "" },
  { name: "Input 2", value: "" },
];

const newPollsReducers = (prevState, action) => {
  if (action.type === "CLEARDATA") {
    return intialValue;
  }
  if (action.type === "INPUTCHANGE") {
    let newState = [...prevState];
    const itemChanged = prevState.findIndex(
      (item) => item.name === action.data.name
    );
    newState[itemChanged] = action.data;

    return newState;
  } else if (action.type === "ADDINPUT") {
    let newState = [...prevState];
    newState.push({ name: `Input ${prevState.length - 1}`, value: "" });
    return newState;
  } else {
    if (prevState.length < 4) {
      return;
    }
    let newState = [...prevState];
    newState.pop();
    return newState;
  }
};

const Poll = ({ data }) => {
  const [activePolls, setActivePolls] = useState(data || []);
  const [selectedPolls, setSelectedPolls] = useState([]);
  const [showAddPopup, setShowPopup] = useState(false);
  const [Newpoll, dispatchAction] = useReducer(newPollsReducers, intialValue);

  const togglePopup = () => {
    setShowPopup(!showAddPopup);
    dispatchAction({ type: "CLEARDATA" });
  };
  const onDelete = async () => {
    try {
      const resultArray = activePolls.filter(
        (item) => !selectedPolls.includes(item._id)
      );

      const response = await axios.delete(
        `${process.env.BACKEND_SERVER}/chat/chatPoll`,
        { data: selectedPolls }
      );
      console.log("result", resultArray);
      setActivePolls(resultArray);
      setSelectedPolls([]);

      console.log("respose", response);
    } catch (err) {
      console.log(err);
    }
  };
  const onSelect = (ID) => {
    const isSelected = selectedPolls.includes(ID);
    console.log("clicked", ID);

    if (isSelected) {
      setSelectedPolls((prevVal) =>
        prevVal.filter((selectedRuleId) => selectedRuleId !== ID)
      );
      console.log("removed");
    } else {
      setSelectedPolls((prevVal) => [...prevVal, ID]);
      console.log("added");
    }
  };
  const onAdd = async () => {
    try {
      const formattedPoll = {
        time: Newpoll[0].value,
        question: Newpoll[1].value,
        inputs: Newpoll.slice(2),
      };

      const response = await axios.post(
        `${process.env.BACKEND_SERVER}/chat/chatPoll`,
        formattedPoll
      );
      setActivePolls((prevVal) => {
        return [...prevVal, response.data.data.data];
      });
      togglePopup();

      console.log("respose", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes["container"]}>
      {showAddPopup && (
        <Popup>
          <MakePoll
            togglePopup={togglePopup}
            Newpoll={Newpoll}
            dispatchAction={dispatchAction}
            confirm={onAdd}
          />
        </Popup>
      )}
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Poll</h2>
        <div className={classes["actions"]}>
          <button
            onClick={() => {
              togglePopup();
            }}
            className={classes["add"]}
          >
            Add
          </button>
          <button onClick={onDelete} className={classes["delete"]}>
            Delete
          </button>
        </div>
      </div>
      <div className={classes["poll-items"]}>
        {activePolls.map((item, index) => (
          <div key={item._id} className={classes["poll-item"]}>
            <label
              onClick={(e) => {
                onSelect(item._id);
                e.preventDefault();
              }}
              className={classes["custom-checkbox"]}
            >
              <input
                type="checkbox"
                checked={selectedPolls.find(
                  (selected) => selected === item._id
                )}
              />
              <span className={classes["checkmark"]}></span>
            </label>
            <p className={classes["question-name"]}> {item.question}</p>
            <p className={classes["text"]}>{item.time} mins remaining</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poll;
