import { useState, useRef } from 'react';

function JSEvent() {
    // "count"라는 새 상태 변수를 선언
    const [value, setValue] = useState(0);
    const inputDom = useRef();

    const add = () => {
        setValue(value + 1);
    };

    const subtract = () => {
        setValue(value - 1);
    };

    const [text, setText] = useState('');
    let tempText = '';

    const changeText = (event) => {
        tempText = event.target.value;
    };

    const printText = () => {
        setText(tempText);
        inputDom.current.focus();
    };

    const [realTimeText, setRTText] = useState('');

    const realTimeChange = (event) => {
        setRTText(event.target.value);
    };

    return (
        <>
            <div>
                <div>{value}</div>
                <button type="button" onClick={add}>
                    Add
                </button>
                <button type="button" onClick={subtract}>
                    Subtract
                </button>
            </div>
            <br />
            <div>
                <input type="text" onChange={changeText} ref={inputDom} />
                <button type="button" onClick={printText}>
                    print
                </button>
                <div>{text}</div>
            </div>
            <br />
            <div>
                <input type="text" onChange={realTimeChange} />
                <div>{realTimeText}</div>
            </div>
        </>
    );
}

export default JSEvent;
