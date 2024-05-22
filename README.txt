// const App = () => {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);


//   const handleChange = (e) => {
//     setTodo(e.target.value)
//   }
  
//   const handleAdd = () => {
//     setTodos([...todo , {todo ,isComp:false}])
//     console.log(todos)
//     setTodo("")
//   }
  
  
//   const handleDelete = () => {
//   }
  

//   return (
//     <div className="font-bold sm:text-2xl md:text-4xl lg:text-5xl">
//       <h1 className="text-center mt-9">DESKTOP-TO-DO APP</h1>
//       <div className=" flex justify-center m-5 sm:text-xs md:text-xl lg:text-lg mr-10 ">
//         <div className="w-3/4 min-h-96 bg-white text-[#34004d]  rounded-xl">
//           <h2 className="flex items-center p-5 justify-center">
//             To-Do App
//             <img src="src\assets\notebook.gif" alt="" className="size-[45px]" />
//           </h2>
//           <div className="bg-[#34004d] w-full h-[2px]"></div>
//           <div className="flex items-center flex-col">
//             <input
//               type="text"
//               name=""
//               id=""
//               className="shadow-lg border-slate-950 border mx-10 my-6 rounded-lg py-2 w-3/4 px-4 outline-none"
//               autoFocus
//               onChange={handleChange} value={todo}
//             />
//             <button
//               type="submit"
//               className="bg-[#34004d] text-white rounded-lg px-10 py-3 mr-5 disabled:bg-[#520178] disabled:text-gray-500"
//               onClick={handleAdd} disabled={todo.length === 0}
//             >
//               ADD
//             </button>
//           </div>
//           <div className="md:mx-28 lg:mx-28 mx-10 my-5">
// {todos.map(ele=>{
//   return <div className="flex items-center justify-between mb-2 " key={todo}>
//           <li className="list-none flex">{ele.todo}</li>
//           <button
//             type="button" onClick={handleDelete}
//             className="bg-[#34004d] text-white px-4 py-2 rounded-lg flex items-center "
//             >
//             DELETE{" "}
//               <img
//                 src="src/assets/trash-bin.gif"
//                 alt=""
//                 className="size-[35px] bg-transparent mix-blend-color-burn"
//                 />
//           </button>
//         </div>
//               })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

// const change = (e) => {
//   setTodo(e.target.value)
// }
// const add = () => {
//   setTodos([...todo,{todo}])
// }
