export const combineDateAndTime = (date, time) => {
  const dateTime = {
    date: new Date(date),
    time: time,
  };

  const [hours, minutes] = dateTime.time.split(":");
  const combinedDateTime = new Date(dateTime.date);
  combinedDateTime.setHours(hours, minutes);

  const isoString = combinedDateTime.toISOString();
  return isoString;
};
export const extarctDateAndTime = (isoString) => {
  const dateObject = new Date(isoString);
  const date = dateObject.toDateString();
  const hours = dateObject.getHours().toString().padStart(2, "0");
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes}`;

  return { date, time };
};