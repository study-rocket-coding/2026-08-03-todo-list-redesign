function FilterTodoBtn ({ name, dataTab, isSelected, onFilter }) {
  return (
    <button
      data-tab={ dataTab }
      className={`block w-full p-4 font-bold leading-5 text-center border-b-2 cursor-pointer ${isSelected ? "text-[#333] border-[#333]" : "text-[#9F9A91] border-[#efefef]"}`}
      onClick={() => onFilter(dataTab)}
    >
      { name }
    </button>
  )
};

export default FilterTodoBtn;