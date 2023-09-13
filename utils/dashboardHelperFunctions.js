import axios from "axios";
import Cookies from "js-cookie";

export const getData = async (route, dispatchDetail, endpoint) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_SERVER}/${endpoint}/${route}
        `,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    dispatchDetail({ type: "UPDATE-ALL", value: response.data.data.data });
  } catch (error) {
    dispatchDetail({ type: "NOT-FOUND", value: error.response.data.message });
    console.log("error", error);
  }
};
export const deleteItem = async (pathname, router, endpoint) => {
  if (!pathname.endsWith("create")) {
    try {
      const response = await axios.delete(
        `${process.env.BACKEND_SERVER}/${endpoint}/${pathname.split("/")[3]}
        `,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      console.log("success", response);
      router.push(`${pathname.slice(0, pathname.lastIndexOf("/"))}`);
    } catch (error) {
      console.log("err", error);
    }
  } else {
    router.push(`${pathname.slice(0, pathname.lastIndexOf("/"))}`);
  }
};
export const saveItem = async (
  pathname,
  data,
  dispatchDetail,
  notify,
  router,
  endpoint,
  dataType
) => {
  let request;
  if (!pathname.endsWith("create")) {
    request = axios.patch(
      `${process.env.BACKEND_SERVER}/${endpoint}/${pathname.split("/")[3]}
      `,
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
  } else {
    request = axios.post(
      `${process.env.BACKEND_SERVER}/${endpoint}
`,
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
  }
  try {
    const dataSent = await request;
    dispatchDetail({ type: "CLEAR-ALL" });
    notify("item saved successfully.", "success");
    console.dir(dataSent);
    router.push(`${pathname.slice(0, pathname.lastIndexOf("/"))}`);
  } catch (error) {
    notify(error.response?.message, "error");
    console.log("err", error);
  }
};
export const flagItem = async (
  itemID,
  itemsArray,
  setItemsArray,
  endpoint,
  notify
) => {
  let foundIndex = itemsArray.findIndex((item) => item._id === itemID);
  let newItemsArray = [...itemsArray];
  let item = itemsArray.find((item) => item._id === itemID);
  try {
    const updatedItem = await axios.patch(
      `${process.env.BACKEND_SERVER}/${endpoint}/${itemID}
        `,
      { flagged: !item.flagged },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    item = { ...item, flagged: !item.flagged };
    newItemsArray[foundIndex] = item;
    setItemsArray(newItemsArray);
    console.log(item);
    notify("item updated successfully.", "success");
  } catch (error) {
    notify(
      error.response.data.error?.errors
        ? Object.values(error.response.data.error.errors)[0].message
        : error.response.data.message,
      "error"
    );
    console.log("err", error);
  }
};
export const saveServer = async (
  pathname,
  data,
  dispatchMainservers,
  dispatchOtherservers,
  notify,
  router,
  endpoint,
  serversId,
  requestType
) => {
  console.log("dataaaa", data);
  let request;
  if (requestType === "PATCH") {
    request = axios.patch(
      `${process.env.BACKEND_SERVER}/${endpoint}/${serversId}
      `,
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
  } else {
    request = axios.post(
      `${process.env.BACKEND_SERVER}/${endpoint}
`,
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
  }
  try {
    const dataSent = await request;
    dispatchMainservers({ type: "CLEAR-ALL" });
    dispatchOtherservers({ type: "CLEAR-ALL" });
    notify("item saved successfully.", "success");
    console.dir(data);
    router.push(`/dashboard/sports-listings`);
  } catch (error) {
    notify(
      error.response.data.error?.errors
        ? Object.values(error.response.data.error.errors)[0].message
        : error.response.data.message,
      "error"
    );
    console.log("err", error);
  }
};
