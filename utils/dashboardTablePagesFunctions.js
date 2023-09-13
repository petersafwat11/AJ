import axios from "axios";
import Cookies from "js-cookie";
import { useCallback } from "react";

export const createItem = (pathname, router) => {
  router.push(`${pathname}/create`);
};
export const checkboxClicked = (element, selectedArray, updateState) => {
  const exist = selectedArray.find((el) => el === element) || false;
  if (exist) {
    updateState(selectedArray.filter((el) => el !== element));
  } else {
    updateState([...selectedArray, element]);
  }
};
export const deleteItem = async (
  allItems,
  selectedItems,
  setAllItems,
  setSelectedItems,
  endpoint
) => {
  const remainingItems = allItems.filter(function (item) {
    return !selectedItems.includes(item._id);
  });
  try {
    await axios.delete(`${process.env.BACKEND_SERVER}/${endpoint}`, {
      data: selectedItems,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    setAllItems(remainingItems);
    setSelectedItems([]);
  } catch (error) {
    console.log("error", error);
  }
};

export const getData = async (endpoint, query) => {
  const defaultQuery = {
    page: 1,
    limit: 10,
  };
  console.log(endpoint);
  try {
    const newData = await axios.get(
      `${process.env.BACKEND_SERVER}/${endpoint}`,
      {
        params: query || defaultQuery,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return newData.data;
  } catch (err) {
    console.log("err", err);
  }
};

