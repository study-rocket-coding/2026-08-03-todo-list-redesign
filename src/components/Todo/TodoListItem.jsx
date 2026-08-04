import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import DisplayTodo from "./DisplayTodo";

function TodoListItem({ id, status, content, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  
  const onSubmit = (data) => {
    onEdit(
      { id, content: data.newContent },
      { onSuccess: () => setIsEditing(false) }
    );
  }

  return (
    <li data-id={id} className="flex items-center mb-[17px] group">
      <label className="w-full flex items-center border-b border-[#e5e5e5] pb-[15px] text-[#333] leading-[20.27px]">
        <input
          className="peer w-5 h-5 border border-[#9F9A91] rounded-[5px] mr-4"
          type="checkbox"
          checked={status}
          onChange={() => onToggle(id) }
        />
        { isEditing ? <EditTodoForm content={content} onSubmit={ onSubmit } /> : <DisplayTodo content={content} /> }
      </label>
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="text-white text-sm font-bold bg-black border-2 border-black rounded-[5px] px-2 py-1 mb-[15px] whitespace-nowrap hover:text-black hover:bg-white">
        編輯
      </button>
      <button
        onClick={() => onDelete(id)}
        className="ml-[17px] mb-[15px] flex items-center justify-center w-6 h-6 text-xl leading-none text-[#333] opacity-0 transition-opacity group-hover:opacity-100">
        ×
      </button>
    </li>
  )
};

export default TodoListItem;