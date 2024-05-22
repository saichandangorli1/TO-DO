import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // let id = "";

  const notify = () => toast("Task Added!");

  useEffect(() => {
    let Data = localStorage.getItem("todos");
    if (Data) {
      const savedData = JSON.parse(localStorage.getItem("todos"));
      setTodos(savedData);
    }
  }, []);
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
    saveToLocalStorage();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isComp: false }]);
    // console.log(todos);
    // console.log(todo);
    // console.log(id);
    setTodo("");
    saveToLocalStorage();
    notify();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((i) => {
      return i.id !== id;
    });
    setTodos(newTodos);
    // console.log(todos);
    // console.log(id);
    saveToLocalStorage();
  };

  const handleCheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((i) => {
      return i.id === id;
    });

    let newTodos = [...todos];
    newTodos[index].isComp = !newTodos[index].isComp;
    setTodos(newTodos);
    saveToLocalStorage();
    // console.log(todos);
  };

  const currentYear = new Date().getFullYear();
  return (
    <div className="font-bold sm:text-2xl md:text-4xl lg:text-5xl">
      <ToastContainer
        className="toaster-container text-xl"
        position="top-right"
        autoClose={111111100}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <h1 className="text-center mt-9">TO-DO APP</h1>
      <div className=" flex justify-center m-5 sm:text-xs md:text-xl lg:text-lg mr-10 ">
        <div className="sm:w-3/4 md:w-3/4 lg:w-3/4  min-h-96 bg-white text-[#34004d]  rounded-xl">
          <h2 className="flex items-center p-5 justify-center">
            To-Do App
            <img src="src\assets\notebook.gif" alt="" className="size-[45px]" />
          </h2>
          <div className="bg-[#34004d] w-full h-[2px]"></div>
          <div className="flex items-center flex-col">
            <input
              type="text"
              name=""
              id=""
              className="shadow-lg border-slate-950 border mx-10 my-6 rounded-lg py-2 w-3/4 px-4 outline-none"
              autoFocus
              onChange={handleChange}
              value={todo}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAdd();
                }
              }}
            />
            <button
              type="submit"
              className="bg-[#34004d] text-white rounded-lg px-6 py-2 md:px-10 md:py-3 mr-5 disabled:bg-[#520178] disabled:text-gray-500"
              onClick={handleAdd}
              onChange={saveToLocalStorage}
              disabled={todo.length === 0}
            >
              ADD
            </button>
          </div>
          <div className="md:mx-28 lg:mx-28 mx-10 my-5">
            {todos.map((ele) => {
              return (
                <div
                  className="flex items-center justify-between mb-2 "
                  key={ele.id}
                >
                  <div
                    className={`flex gap-10 items-center ${
                      ele.isComp ? "line-through italic" : " "
                    }`}
                  >
                    <input
                      type="checkbox"
                      name={ele.id}
                      onChange={handleCheck}
                      value={ele.isComp}
                      checked={ele.isComp}
                      className=" accent-[#34004d] w-[10px] sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 bg-purple-600"
                      id="purple-checkbox"
                    />

                    <label htmlFor={ele.id}>
                      {" "}
                      <li
                        className={`list-none flex text-[12px] md:text-lg  ${
                          ele.isComp ? "line-through italic" : " "
                        } `}
                        id={ele.id}
                      >
                        {ele.todo}
                      </li>
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      handleDelete(e, ele.id);
                    }}
                    onChange={saveToLocalStorage}
                    className="bg-[#34004d] text-white px-4 py-2 rounded-lg flex items-center w-[71px] h-[30px] text-[8px] md:w-28 md:h-10 md:text-xs "
                  >
                    DELETE{" "}
                    <img
                      src="src/assets/trash-bin.gif"
                      alt=""
                      className="size-[20px] md:size-[35px] bg-transparent mix-blend-color-burn"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 text-black text-center py-4 absolute bottom-0 w-full">
      <p className="text-sm">TaskTrove | Created by Saichandan Gorli</p>
      <p className="text-xs">© {currentYear} All Rights Reserved</p>
    </footer>
    </div>
  );
};

export default App;
