import React from "react";
import TodoBar from "./TodoBar";
import { MdAddBox } from "react-icons/md";
import AddTodoModel from "./AddTodoModel";

const TodoContainer = () => {
  const [todos, setTodos] = React.useState([]);
  const [isAddTodoModelOpen, setIsAddTodoModelOpen] = React.useState(false);

  const addTodo = (title) => {
    const newTodo = { title, isDone: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index, newTitle) => {
    const updatedTodos = [...todos];
    updatedTodos[index].title = newTitle;
    setTodos(updatedTodos);
  };

  const toggleDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isDone = !updatedTodos[index].isDone;
    setTodos(updatedTodos);
  };

  const clearDone = () => {
    setTodos(todos.filter((todo) => !todo.isDone));
  };

  return (
    <div className="bg-slate-100 my-10 mx-10 rounded-xl">
      <div className="bg-slate-200 h-10 rounded-tr-xl rounded-tl-xl flex flex-col justify-center items-end px-2">
        <MdAddBox
          className="text-4xl text-slate-400 cursor-pointer active:scale-90"
          onClick={() => setIsAddTodoModelOpen(true)}
        />
      </div>

      {todos.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          <p className="text-lg">No tasks yet. Start by adding a new task!</p>
        </div>
      ) : (
        todos.map((todo, index) => (
          <TodoBar
            key={index}
            title={todo.title}
            isdone={todo.isDone}
            handleDelete={() => deleteTodo(index)}
            handleEdit={(newTitle) => editTodo(index, newTitle)}
            handleDone={() => toggleDone(index)}
          />
        ))
      )}

      <AddTodoModel
        isOpen={isAddTodoModelOpen}
        onClose={() => setIsAddTodoModelOpen(false)}
        onAdd={(title) => {
          addTodo(title);
          setIsAddTodoModelOpen(false);
        }}
      />

      <div className="bg-slate-200 h-10 rounded-br-xl rounded-bl-xl flex items-center justify-end p-6">
        {todos.some((todo) => todo.isDone) && (
          <button
            className="bg-slate-500 text-white px-4 py-1 rounded shadow hover:bg-red-600 transition"
            onClick={clearDone}
          >
            Clear Completed Tasks
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
