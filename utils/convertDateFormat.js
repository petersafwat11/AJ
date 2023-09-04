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
export const getMatchDate = (dateString) => {
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
  // Convert the difference to hours, minutes, and seconds
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const mins = Math.floor(diff / (1000 * 60));
  diff -= mins * (1000 * 60);

  const secs = Math.floor(diff / 1000);

  // Format the remaining time as desired
  const formattedRemainingTime = hours + "h " + mins + "m " + secs + "s";
  return formattedRemainingTime;
};
