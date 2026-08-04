import { useForm } from "react-hook-form";

function EditTodoForm ({ content, onSubmit }) {
  const {
    register,
    formState: { errors },
    handleSubmit 
  } = useForm()

  return (
    <form onSubmit={ handleSubmit(onSubmit) } >
      <input
        className="border border-gray-400 rounded px-1 py-2" 
        defaultValue={ content }
        { ...register("newContent") }
        onBlur={ handleSubmit(onSubmit) }/>
    </form>
    )
};

export default EditTodoForm;