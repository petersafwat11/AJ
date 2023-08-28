import axios from "axios";

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
  const remainingStreamLinks = allItems.filter(function (item) {
    return !selectedItems.includes(item._id);
  });
  try {
    const newStreamLinks = await axios.delete(
      `${process.env.BACKEND_SERVER}/${endpoint}`,
      {
        data: selectedItems,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setAllItems(remainingStreamLinks);
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

  try {
    const newData = await axios.get(
      `${process.env.BACKEND_SERVER}/${endpoint}`,
      {
        params: query || defaultQuery,
      }
    );
    console.dir(newData.data.data.data);
    console.log("data");

    return newData.data;
  } catch (err) {
    console.log("err", err);
  }
};
