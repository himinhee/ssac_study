import './App.css';
import { useState, useRef } from 'react';
import TodoHeader from './component/TodoHeader';
import TodoMain from './component/TodoMain';
import TodoList from './component/TodoList';
import TodoStatus from './component/TodoStatus';
import TodoFooter from './component/TodoFooter';

//App() 에서 Hello(), Props() 등 다른 함수들을 계속 호출중 : Component 합성
function App() {
    //기존 data 배열 위한 useState
    const [todoArray, setTodoArray] = useState([
        { id: 1, todoContent: 'Todo1' },
        { id: 2, todoContent: 'Todo2' },
        { id: 3, todoContent: 'Todo3' },
    ]);

    //남은 할일 counting을 위한 state 변수
    const [number, setNumber] = useState(3);

    //신규 data를 위한 useState
    // 또는 기본 데이터 배열의 추가/삭제를 위한 객체 변수
    const [todoInput, setTodoInput] = useState({
        todoContent: '',
    });

    // 구조 분해 할당 - todoInput.todoContent 대신 그냥 todoContent라고 사용 가능
    const { todoContent } = todoInput;

    //onChange event 발생시 호출되는 함수
    //Text 입력 시 carInput에 data update, 화면에 텍스트 표시를 리렌더링하는 함수
    const changeTodo = (event) => {
        const { name, value } = event.target;

        setTodoInput({
            ...todoInput,
            [name]: value,
        });
    };

    const nextID = useRef(4);

    //버튼 클릭시 input에 입력되어 있는 텍스트를 기본 데이터 배열에 추가 및 리렌더링
    const addTodo = () => {
        const newTodo = {
            id: nextID.current,
            todoContent: todoContent,
        };

        //기존의 배열형태 DB인 carArray에 newCar를 추가 -> 이후 re-rendering
        setTodoArray([...todoArray, newTodo]);

        // input 부분을 초기화 -> 이후 re-rendering
        setTodoInput({
            todoContent: '',
        });

        nextID.current++;
        setNumber(number + 1);
    };

    const removeTodo = (id) => {
        // filter 내장 함수 : 조건에 맞는 데이터만 추출하여 새로운 데이터(배열) 생성
        setTodoArray(
            todoArray.filter(function (todo) {
                return todo.id !== id;
            })
        );
        setNumber(number - 1);
    };

    return (
        <>
            <TodoHeader
                todoContent={todoContent}
                changeTodo={changeTodo}
                addTodo={addTodo}
            />
            <TodoMain>
                <TodoList todoArray={todoArray} removeTodo={removeTodo} />
                <TodoStatus number={number} />
            </TodoMain>
            <TodoFooter />
        </>
    );
}

export default App;
