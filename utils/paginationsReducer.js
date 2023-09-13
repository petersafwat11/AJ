export const paginationsReducer = (state, action) => {
  if (action.type === "SEARCH-RESULTS") {
    return {
      ...state,
      currentPage: action.currentPage,
      results: action.results,
    };
  } else if (action.type === "BACK") {
    const currentPage = state.currentPage;
    if (currentPage === 1) {
      return { ...state };
    }
    return { ...state, currentPage: state.currentPage - 1 };
  } else if (action.type === "FORWARD") {
    return { ...state, currentPage: state.currentPage + 1 };
  } else if (action.type === "CURRENT-PAGE") {
    return { ...state, currentPage: action.value };
  } else if (action.type === "ROW") {
    return { ...state, rowsPerPage: action.value };
  } else {
    return { ...state, results: action.value };
  }
};
