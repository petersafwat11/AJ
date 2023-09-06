import React from "react";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-time-picker/dist/TimePicker.css";
// import DatePicker  from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerr = ({ data, dispatchDetail, type, dateAndTime }) => {
  return (
    <div>
      {dateAndTime ? (
        <DatePicker
          onChange={(date) =>
            dispatchDetail({ type: type, value: { ...data, date: date } })
          }
          value={data.date}
        />
      ) : (
        <DatePicker
          onChange={(date) => dispatchDetail({ type: type, value: date })}
          value={data}
        />
      )}
    </div>
  );
};

export default DatePickerr;
