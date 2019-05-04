export { CHANGE_SEARCH_FIELD } from "./actionType";

export const setSearchFiled = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};
