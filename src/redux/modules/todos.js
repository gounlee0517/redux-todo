// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const SWITCH_TODO = 'todos/SWITCH_TODO';

export const setAddTodo = (payload) => {
  return {type: ADD_TODO, payload};
}
export const setDeleteTodo = (id) => {
  return {type: DELETE_TODO, payload:id};
}
export const setSwitchTodo = (id) => {
  return {type: SWITCH_TODO, payload:id};
}

const initialState = [
  {
    id: shortid.generate(),
    title: "공부하기",
    body: "리액트, 리덕스",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      return [newTodo, ...state];

    case DELETE_TODO:
      const todoId = action.payload;
      return state.filter(todo => todo.id !== todoId);

    case SWITCH_TODO:
      const todoSwitch = action.payload;
      return state.map((todo) => {
        if (todo.id === todoSwitch) {
          return {...todo, isDone: !todo.isDone};
        }
        return todo;
      })

    default:
      return state;
  }
};

export default todos;
