// component가 대문자로 시작하므로, css는 구분을 위해 소문자로 시작
import header from '../css/header.module.css';

//css를 가져오기 위해서 className={header.section} 이런 식으로 입력
//className에 '-'이 있는 경우, 배열 형태로 입력 ex. className={header['form-btn']}
function TodoHeader({ todoContent, changeTodo, addTodo }) {
    return (
        // Title & input
        <header id={header.header}>
            <div className={header.section}>
                <h1 className={header.logo}>TO-DO</h1>
                <div className={header.form}>
                    <button
                        type="button"
                        className={header['form-btn']}
                        onClick={addTodo}
                    >
                        <img
                            src="add_button.svg"
                            className={header['form-img']}
                            alt="add button"
                        />
                    </button>
                    <input
                        type="text"
                        className={header['form-text']}
                        placeholder="새 할 일을 입력해주세요"
                        onChange={changeTodo}
                        name="todoContent"
                        value={todoContent}
                    />
                </div>
            </div>
        </header>
    );
}

export default TodoHeader;
