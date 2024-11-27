import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

const TodoBar = ({ title, isdone, handleDelete, handleEdit, handleDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleTitleClick = () => {
    if (!isdone) {
      setIsEditing(true);
    }
  };

  const handleTitleSubmit = () => {
    handleEdit(editedTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center px-4 py-3">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isdone}
          onChange={handleDone}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleTitleSubmit}
            onKeyDown={(e) => e.key === "Enter" && handleTitleSubmit()}
            autoFocus
            className="w-full outline-none border-b border-dashed border-gray-500 bg-transparent"
          />
        ) : (
          <p
            className={isdone ? "line-through" : ""}
            onClick={handleTitleClick}
          >
            {title}
          </p>
        )}
      </div>
      <div>
        <MdDeleteForever
          className="text-2xl text-red-500 cursor-pointer active:scale-90"
          onClick={handleDelete}
        ></MdDeleteForever>
      </div>
    </div>
  );
};

TodoBar.propTypes = {
  title: PropTypes.string.isRequired,
  isdone: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
};

export default TodoBar;
