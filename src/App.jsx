import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // let id = "";

  const notify = () => toast(`New Task Added!🥳🥳`);

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
    saveToLocalStorage();
    // console.log(todos);
    // console.log(id);
  };
  const handleEdit = (e, id) => {
    const t = todos.filter((i) => {
      return i.id === id;
    });
    setTodo(t[0].todo);

    let newTodos = todos.filter((i) => {
      return i.id !== id;
    });
    setTodos(newTodos);
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
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* public\notebook.gif */}

      <div className=" flex justify-center items-center min-h-screen m-5 sm:text-xs md:text-xl lg:text-lg mr-10 ">
        <div className="sm:w-3/4 md:w-3/4 lg:w-3/4  min-h-96 bg-white text-[#34004d] mb-[80px]  rounded-xl">
          <h2 className="flex items-center p-5 justify-center">
            TaskTrove
            <img src="/notebook.gif" alt="" className="size-[45px]" />
          </h2>
          <div className="bg-[#c64ffd] w-full h-[2px]"></div>
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
                  if (todo.charAt(0) !== " ") {
                    handleAdd();
                  }
                }
              }}
            />
            <button
              type="submit"
              className="bg-[#520178] text-white rounded-lg px-6 py-2 md:px-10 md:py-3 mr-5 disabled:bg-[#c64ffd] disabled:text-gray-700"
              onClick={handleAdd}
              onChange={saveToLocalStorage}
              disabled={todo.length === 0 || todo.charAt(0) === " "}
            >
              ADD
            </button>
          </div>
          <div className="md:mx-28 lg:mx-28 mx-10 my-5">
            {/* {todos.map((ele) => {
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
                      src="/trash-bin.gif"
                      alt=""
                      className="size-[20px] md:size-[35px] bg-transparent mix-blend-color-burn"
                    />
                  </button>
                </div>
              );
            })} */}

            {todos
              .filter((ele) => !ele.isComp)
              .map((ele) => (
                <div
                  className="flex items-center justify-between mb-2"
                  key={ele.id}
                >
                  <div
                    className={`flex gap-2 sm:gap-4 items-center ${
                      ele.isComp ? "line-through italic" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      name={ele.id}
                      onChange={handleCheck}
                      value={ele.isComp}
                      checked={ele.isComp}
                      className="accent-[#34004d] w-[10px] sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 bg-purple-600"
                      id="purple-checkbox"
                    />
                    <label htmlFor={ele.id}>
                      {" "}
                      <li
                        className={`list-none flex text-[12px] md:text-lg ${
                          ele.isComp ? "line-through italic" : ""
                        }`}
                        id={ele.id}
                      >
                        {ele.todo}
                      </li>
                    </label>
                  </div>
                  <div className="flex gap-2 sm:gap-6">
                    <button
                      type="button"
                      onClick={(e) => {
                        handleEdit(e, ele.id);
                      }}
                      onChange={saveToLocalStorage}
                      className="bg-transparent border-[2px] border-[#34004d] text-[#34004d]  px-3 sm:px-4 py-2 rounded-lg flex items-center w-[55px] h-[25px] text-[8px] sm:w-20 sm:h-10 md:text-xs"
                    >
                      EDIT{" "}
                      <img
                        src="/text-box.gif"
                        alt=""
                        className="size-[15px] md:size-[25px]"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        handleDelete(e, ele.id);
                      }}
                      onChange={saveToLocalStorage}
                      className="bg-[#34004d] text-white px-2 sm:px-4 py-2 rounded-lg flex items-center w-[55px] h-[25px] text-[8px] sm:w-24 sm:h-10 md:text-xs"
                    >
                      DELETE{" "}
                      <img
                        src="/trash-bin.gif"
                        alt=""
                        className="size-[15px] sm:size-[30px] bg-transparent mix-blend-color-burn"
                      />
                    </button>
                  </div>
                </div>
              ))}
            {todos
              .filter((ele) => ele.isComp)
              .map((ele) => (
                <div
                  className="flex items-center justify-between mb-2"
                  key={ele.id}
                >
                  <div
                    className={`flex gap-2 sm:gap-4 items-center ${
                      ele.isComp ? "line-through italic" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      name={ele.id}
                      onChange={handleCheck}
                      value={ele.isComp}
                      checked={ele.isComp}
                      className="accent-[#34004d] w-[10px] sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 bg-purple-600"
                      id="purple-checkbox"
                    />
                    <label htmlFor={ele.id}>
                      {" "}
                      <li
                        className={`list-none flex text-[12px] md:text-lg ${
                          ele.isComp ? "line-through italic" : ""
                        }`}
                        id={ele.id}
                      >
                        {ele.todo}
                      </li>
                    </label>
                  </div>
                  <div className="flex gap-2 sm:gap-6">
                    {/* <button
                      type="button"
                      onClick={(e) => {
                        handleDelete(e, ele.id);
                      }}
                      onChange={saveToLocalStorage}
                      className="bg-transparent border-[2px] border-[#34004d] text-[#34004d] px-3 sm:px-4 py-2 rounded-lg flex items-center w-[55px] h-[25px] text-[8px] sm:w-20 sm:h-10 md:text-xs"
                    >
                      EDIT{" "}
                      <img
                        src="/text-box.gif"
                        alt=""
                        className="size-[15px] md:size-[25px]"
                      />
                    </button> */}
                    <button
                      type="button"
                      onClick={(e) => {
                        handleDelete(e, ele.id);
                      }}
                      onChange={saveToLocalStorage}
                      className="bg-[#34004d] text-white px-2 sm:px-4 py-2 rounded-lg flex items-center w-[55px] h-[25px] text-[8px] sm:w-24 sm:h-10 md:text-xs"
                    >
                      DELETE{" "}
                      <img
                        src="/trash-bin.gif"
                        alt=""
                        className="size-[15px] sm:size-[30px] bg-transparent mix-blend-color-burn"
                      />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 text-black text-center py-4 fixed bottom-0 mt-10 w-full">
        <p className="text-sm">TaskTrove | Developed by Saichandan Gorli</p>
        <p className="text-xs">© {currentYear} All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
