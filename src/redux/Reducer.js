import * as types from "./Actiontypes";

const initialState = {
  todo: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMPLETE_TODO:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default todosReducer;
