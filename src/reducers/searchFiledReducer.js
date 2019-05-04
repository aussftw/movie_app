import { CHANGE_SEARCH_FIELD } from "../actions/actionType";

const initialState = {
  searhfield: ""
};

export const searchMovie = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searhfield: action.payload };
  }
};
