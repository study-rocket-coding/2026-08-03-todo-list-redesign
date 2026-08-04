import { useState } from "react";
import Nav from "./Nav"
import AddTodoForm from "./AddTodoForm";
import { filterTabs } from './data'
import FilterTodoBtn from "./FilterBtn";
import TodoListItem from "./TodoListItem"
import { useTodos } from "../../hooks/useTodos"

function Todolist () {
  const [filter, setFilter] = useState("all");

  const { todos, isAdding, errorLog, addTodo, removeTodo, toggleTodo, editTodo, clearCompleted } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'pending':
        return !todo.status;
      case 'completed':
        return todo.status;
      default:
        return true;
    }
  })

  const completedTodos = todos.filter((todo) => todo.status);

  return (
    <section
      id="todoListPage"
      className="bg-[linear-gradient(175deg,#FFD370_100%,#fff_0%)] md:bg-[linear-gradient(175deg,#FFD370_60%,#fff_40%)]"
    >
      <Nav />
      <div className="h-screen mx-auto px-8 py-4">
        <div className="w-full mx-auto md:w-[500px]">
          <AddTodoForm onAdd={ addTodo } isAdding={ isAdding }/>
          <div className="bg-white rounded-[10px] shadow-[0_0_15px_0_rgba(0,0,0,0.15)]">
            <ul className="flex justify-evenly">
              {
                filterTabs.map((filterTab) => {
                  return (
                    <li className="w-full" key={ filterTab.dataTab } >
                      <FilterTodoBtn 
                        {...filterTab}
                        isSelected={filter === filterTab.dataTab}
                        onFilter={ setFilter }/>
                    </li>
                )})
              }
            </ul>
            <div className="pt-[23px] pl-6 pr-[17px] pb-8">
              <ul className="mb-2 overflow-y-auto max-h-[400px]">
                { errorLog && 
                  <p className="text-red-700"> { errorLog } </p>
                }
                {
                  filteredTodos.map((todo) => 
                  <TodoListItem
                    key={todo.id} 
                    {...todo}
                    onDelete={ removeTodo }
                    onToggle={ toggleTodo }
                    onEdit={ editTodo } 
                  />
                )}
              </ul>
              <div className="flex justify-between">
                <p className="text-sm text-[#333]"> {completedTodos.length} 個已完成項目</p>
                <button
                  type="button"
                  className="text-sm text-[#9F9A91] cursor-pointer" onClick={ () => clearCompleted() }>
                  清除已完成項目
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};


export default Todolist;