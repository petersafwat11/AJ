export const paginationsReducer = (state, action) => {

  if (action.type === "BACK") {
    const currentPage = state.currentPage;
    if (currentPage === 1) {
      return { ...state };
    }
    return { ...state, currentPage: state.currentPage - 1 };
  } else if (action.type === "FORWARD") {

    return { ...state, currentPage: state.currentPage + 1 };
  } else if (action.type === "ROW") {
    return { ...state, rowsPerPage: action.value };
  } else {
    return { ...state, results: action.value };
  }
};
