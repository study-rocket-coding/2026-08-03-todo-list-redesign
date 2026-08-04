import { useForm } from "react-hook-form";

function EditTodoForm ({ content, onSubmit }) {
  const {
    register,
    handleSubmit
  } = useForm()

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className="flex-1">
      <input
        className="w-full box-border border border-brand-800 rounded-lg py-2 px-2.5 text-base leading-normal focus:outline-none"
        defaultValue={ content }
        autoFocus
        { ...register("newContent") }
        onBlur={ handleSubmit(onSubmit) }/>
    </form>
    )
};

export default EditTodoForm;
