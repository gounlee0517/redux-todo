import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  setAddTodo,
  setDeleteTodo,
  setSwitchTodo,
} from "../redux/modules/todos";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newTodo = useSelector((state) => state.todos);
  const todoId = useSelector((state) => state.todos);
  const todoSwitch = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if ((e.target.name === "body")) {
      setBody(e.target.value);
    }
  };

  const onSubmitHandler = (e) => {
    dispatch(setAddTodo());
  };

  const onDeleteHandler = (id) => {
    dispatch(setDeleteTodo(id));
  };

  const onDoneHandler = (id) => {
    dispatch(setSwitchTodo(id));
  };

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>

      <section className="input-section">
        <input name="title" value={title} onChange={onChangeHandler} />
        <input name="body" value={body} onChange={onChangeHandler} />
        <button onClick={onSubmitHandler}>submit</button>
      </section>

      <section className="todolist-section">
        <h2>my plan</h2>
        <div>
          {newTodo
            .filter((todo) => !todo.isDone)
            .map(function (item) {
              return (
                <>
                  <div>
                    <h3 onClick={() => {navigate(`/${item.id}`)}}>{item.title}</h3>
                    <p>{item.body}</p>
                    <button
                      onClick={() => onDeleteHandler(item.id)}
                    >삭제</button>
                    <button
                      onClick={() => onDoneHandler(item.id)}
                    >
                      {item.isDone ? "취소" : "확인"}
                    </button>
                  </div>
                </>
              );
            })}
        </div>
      </section>

      <section>
        <h2>done</h2>
        {newTodo
          .filter((todo) => todo.isDone)
          .map(function (item) {
            return (
              <>
                  <div>
                    <h3 onClick={() => {navigate(`/${item.id}`)}}>{item.title}</h3>
                    <p>{item.body}</p>
                    <button
                      onClick={() => onDeleteHandler(item.id)}
                    >삭제</button>
                    <button
                      onClick={() => onDoneHandler(item.id)}
                    >
                      {item.isDone ? "취소" : "확인"}
                    </button>
                  </div>
                </>
            )
          })
        }

      </section>

      <footer></footer>
    </div>
  );
};

export default Home;
