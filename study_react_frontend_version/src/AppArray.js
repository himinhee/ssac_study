import { useState, useRef } from 'react';
import HookArray from './HookArray';
import HookArrayCreate from './HookArrayCreate';

function AppArray() {
    //기존 data를 위한 useState
    const [carArray, setCarArray] = useState([
        { id: 1, carname: 'Fiat', color: 'white' },
        { id: 2, carname: 'Kia', color: 'red' },
        { id: 3, carname: 'Honda', color: 'Blue' },
    ]);

    //신규 data를 위한 useState
    // 또는 기본 데이터 배열의 추가/삭제를 위한 객체 변수
    const [carInput, setCarInput] = useState({
        carname: '',
        color: '',
    });

    // 구조 분해 할당
    const { carname, color } = carInput;

    //onChange event 발생시 호출되는 함수
    //Text 입력 시 carInput에 data update, 화면에 텍스트 표시를 리렌더링하는 함수
    const changeText = (event) => {
        // event 객체에서 name과 value를 받아오기
        const { name, value } = event.target;

        //carInput 객체에 새로 받아온 데이터를 set
        //'...' : spread 연산자 - 배열의 기존 data를 다 가져오기
        setCarInput({
            ...carInput,
            [name]: value,
        });
    };

    //useRef 상태함수를 이용하여 ID number 변수 생성
    //useRef()에 매개변수값을 넣어주면, current property값으로 설정
    const nextID = useRef(4);

    //버튼 클릭시 input에 입력되어 있는 텍스트를 기본 데이터 배열에 추가 및 리렌더링
    const addText = () => {
        //기본 데이터 배열(DB)에 넣어줄 객체
        //carname가 color의 값은 이미 changeText 함수에서 update되어 입력된 정보를 가지고 있음
        const newCar = {
            id: nextID.current,
            carname: carname,
            color: color,
        };

        //기존의 배열형태 DB인 carArray에 newCar를 추가 -> 이후 re-rendering
        setCarArray([...carArray, newCar]);

        // input 부분을 초기화 -> 이후 re-rendering
        setCarInput({
            carname: '',
            color: '',
        });
    };

    nextID.current++;

    const removeText = (id) => {
        // filter 내장 함수 : 조건에 맞는 데이터만 추출하여 새로운 데이터(배열) 생성
        setCarArray(
            carArray.filter(function (car) {
                return car.id !== id;
            })
        );
    };

    return (
        // 배열 내용을 표시, 추가, 삭제
        <>
            <HookArrayCreate
                carname={carname}
                color={color}
                changeText={changeText}
                addText={addText}
            />
            <HookArray carArray={carArray} removeText={removeText} />
        </>
    );
}

export default AppArray;
