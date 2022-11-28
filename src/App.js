import "./App.css";
import React, { useState, useCallback } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";

function App() {
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "공부하기",
      completed: false,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ]);
  const [value, setValue] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let newTodo = {
        id: Date.now(),
        title: value,
        completed: false,
      };

      setTodoData((todo) => [...todo, newTodo]);
      setValue("");
    },
    [setTodoData, value]
  );

  const handleRemove = useCallback(() => {
    setTodoData([]);
  });

  return (
    <>
      <div className=" flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className=" w-full p-5 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg ">
          <div className="flex justify-between mb-3">
            <h1>할 일 목록</h1>
            <button onClick={handleRemove}>Delete All</button>
          </div>
          <Lists todoData={todoData} setTodoData={setTodoData} />
          <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}

export default App;
