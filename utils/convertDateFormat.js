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
