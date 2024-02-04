import React, { useEffect, useState } from "react";
import { loadTodo } from "./action";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const todo = useSelector((state) => state.todo);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodo());
  }, []);
  return (
    <div>
      <div className="p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">
        <b>List todo:</b>
      </div>
      {loading
        ? "loading..."
        : todo.map((item) => {
            return <div className="w-50 p-3">{item.title}</div>;
          })}
    </div>
  );
}

export default App;
