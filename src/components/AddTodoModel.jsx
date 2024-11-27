import React from "react";
import { MdOutlineClose } from "react-icons/md";
import PropTypes from "prop-types";

const AddTodoModel = ({ isOpen, onClose, onAdd }) => {
  const [todoText, setTodoText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      onAdd(todoText);
      setTodoText("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-slate-100 p-6 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Todo</h2>
          <MdOutlineClose
            className="cursor-pointer text-2xl"
            onClick={onClose}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            className="w-full p-2 border rounded mb-4 outline-none"
            placeholder="Enter todo item"
          />
          <button
            type="submit"
            className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-600"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

AddTodoModel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
export default AddTodoModel;
