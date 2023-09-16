export const convertDate = (dateStr) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  let formattedDate = `${year}-${month}-${day}` || 1;
  let formattedTime = `${hours}:${minutes}` || 2;

  return { formattedDate, formattedTime };
};
export const getMatchDate = (dateString, dateText) => {
  const date = new Date(dateString);

  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const MatchDateFormat = month + " " + day + " - " + hours + ":" + minutes;
  const dateTextFormat = month + " " + day;
  if (dateText) {
    return dateTextFormat;
  }
  return MatchDateFormat;
};
export const calcRemainingTime = (dateString) => {
  const targetDate = new Date(dateString);
  const now = new Date();

  // Calculate the difference in milliseconds
  let diff = targetDate.getTime() - now.getTime();
  if (diff < 0) {
    return false;
  }

  // Convert the difference to days, hours, minutes, and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const mins = Math.floor(diff / (1000 * 60));
  diff -= mins * (1000 * 60);

  const secs = Math.floor(diff / 1000);

  // Format the remaining time as desired
  let formattedRemainingTime;

  if (days >= 1) {
    formattedRemainingTime =
      days + "d " + hours + "h " + mins + "m " + secs + "s";
    return formattedRemainingTime;
  }

  formattedRemainingTime = hours + "h " + mins + "m " + secs + "s";
  return formattedRemainingTime;
};
export const formatTime = (input) => {
  let formattedTime = input.replace(/\D/g, "").slice(0, 4);
  if (formattedTime.length >= 2) {
    formattedTime = formattedTime.replace(/(\d{2})/, "$1:");
  }

  return formattedTime;
};

export const convertDateHomePage = (dateString) => {
  const date = new Date(dateString);
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short"
  };
  const MatchDateFormat = date.toLocaleString(undefined, options);
  // const dateTextFormat = date.toLocaleString(undefined, { month: "short", day: "numeric" });
  // if (dateText) {
  //   return dateTextFormat;
  // }
  return MatchDateFormat;
};
