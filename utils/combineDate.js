export const combineDateAndTime = (date, time) => {
  const dateTime = {
    date: new Date(date),
    time: time,
  };

  const [hours, minutes] = dateTime.time.split(":");
  const combinedDateTime = new Date(
    Date.UTC(
      dateTime.date.getFullYear(),
      dateTime.date.getMonth(),
      dateTime.date.getDate(),
      hours,
      minutes
    )
  );
  combinedDateTime.setHours(hours, minutes);

  const isoString = combinedDateTime.toISOString();

  return isoString;
};
export const extarctDateAndTime = (isoString) => {
  const dateObject = new Date(isoString);
  const utcString = dateObject.toISOString();
  const date = utcString.slice(0, 10); // YYYY-MM-DD
  const time = utcString.slice(11, 16); // HH:mm
  console.log(date, time);
  return { date, time };
};
