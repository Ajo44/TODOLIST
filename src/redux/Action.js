import * as types from "./Actiontypes";

export const completeTodo = (todo) => ({
  type: types.COMPLETE_TODO,
  payload: todo,
});
