import todolist from '../css/todolist.module.css';
import todoitem from '../css/todoitem.module.css';

//TodoItem.js의 내용을 전부 TodoList.js로 가져옴

function TodoItem({ todo, removeTodo }) {
    return (
        <li className={todoitem['todo-item']}>
            <input type="checkbox" className={todoitem.check} />
            <mark className={todoitem.text}>{todo.todoContent}</mark>
            <button
                type="button"
                className={todoitem.del}
                onClick={function () {
                    return removeTodo(todo.id);
                }}
            >
                <img
                    src="add_button.svg"
                    className={todoitem.img}
                    alt="delete"
                />
            </button>
        </li>
    );
}

function TodoList({ todoArray, removeTodo }) {
    return (
        <section className={todolist.section}>
            <ul className="todo-list">
                {todoArray.map(function (todo) {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            removeTodo={removeTodo}
                        />
                    );
                })}
            </ul>
        </section>
    );
}

export default TodoList;
