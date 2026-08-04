import { useForm } from "react-hook-form";

function EditTodoForm ({ content, onSubmit }) {
  const {
    register,
    handleSubmit
  } = useForm()

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className="flex-1">
      <label htmlFor="newContent" className="sr-only">編輯待辦事項內容</label>
      <input
        id="newContent"
        className="w-full box-border border border-emerald-500 rounded-lg py-2 px-2.5 text-base leading-normal focus:outline-none focus:ring-2 focus:ring-emerald-200"
        defaultValue={ content }
        autoFocus
        { ...register("newContent") }
        onBlur={ handleSubmit(onSubmit) }/>
    </form>
    )
};

export default EditTodoForm;
