function DisplayTodo({ content }) {
  return (
    <span className="transition-all duration-[400ms] peer-checked:text-[#9F9A91] peer-checked:line-through">
      { content }
    </span>
  )
};

export default DisplayTodo;