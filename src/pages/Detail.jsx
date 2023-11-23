import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {setAddTodo} from "../redux/modules/todos";

const Detail = () => {
  const newTodo = useSelector((state) => state.todos);

  return <div>
    {newTodo}
  </div>;
};

export default Detail;
