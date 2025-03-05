import { useState } from "react";
import "./todo.css";
import { TodoForm } from "./todoForm";
import { TodoList } from "./todolist";
import {
  getLocalStorageTodoData,
  setLocaStorageTodoData,
} from "./TodoLocalStorage";
import { TodoDateTime } from "./todoDateTime";

export const Todo = () => {
  const [task, setTask] = useState(getLocalStorageTodoData);

  //todo add data to localstorage
  setLocaStorageTodoData(task);

  //todo checktodo fundtionality
  const handleCheckTodo = (checkContent) => {
    const updatedtask = task.map((item) => {
      if (item.content === checkContent) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    });
    setTask(updatedtask);
  };

  //todoClearAll functionality
  const handleClearAll = () => {
    return setTask([]);
  };

  // todo handleSubmit functionality
  const handleSubmitm = (inputvalue) => {
    const { id, content, isChecked } = inputvalue;

    const ifTodoContenntMatched = task.find((ele) => ele.content === content);

    if (ifTodoContenntMatched || content === "") return;

    setTask((prev) => [...prev, { id, content, isChecked }]);
  };

  //todo handletodo functionality
  const handleDeleteTodo = (deleteItem) => {
    console.log(deleteItem);

    const updatedDeletedData = task.filter((curEle) => deleteItem !== curEle);

    setTask(updatedDeletedData);
  };

  return (
    <>
      <header className="header">TODO LIST</header>

      <section className="section-todo">
        <TodoDateTime />

        <TodoForm submitbutton={handleSubmitm} />

        <TodoList
          data={task}
          deletetodo={handleDeleteTodo}
          checkedtodo={handleCheckTodo}
          Clearall={handleClearAll}
        />
      </section>
    </>
  );
};
