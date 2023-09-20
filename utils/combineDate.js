export const combineDateAndTime = (date, time) => {
  const dateTime = {
    date: new Date(date),
    time: time,
  };
  console.log("combinedDateTime", time, dateTime.date);

  const [hours, minutes] = dateTime.time.split(":");
  const combinedDateTime = new Date(
    dateTime.date.toLocaleString("en-US", { timeZone: "UTC" })
  );
  console.log("combinedDateTime", combinedDateTime);
  combinedDateTime.setUTCHours(hours, minutes);
  console.log("combinedDateTime", combinedDateTime);

  const isoString = combinedDateTime.toISOString();
  console.log("combinedDateTime", isoString);

  return isoString;
};
export const extarctDateAndTime = (isoString) => {
  const dateObject = new Date(isoString);
  const utcString = dateObject.toISOString();
  const date = utcString.slice(0, 10); // YYYY-MM-DD
  const time = utcString.slice(11, 16); // HH:mm

  return { date, time };
};
