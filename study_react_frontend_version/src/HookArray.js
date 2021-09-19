function ListItem({ car, removeText }) {
    return (
        <li>
            <span>
                {car.carname} : {car.color}
            </span>
            <button
                type="button"
                onClick={function () {
                    return removeText(car.id);
                }}
            >
                삭제
            </button>
        </li>
    );
}

function HookArray({ carArray, removeText }) {
    return (
        <ul>
            {/* map 함수를 이용하여 carArray 배열 안의 객체들을 하나씩 불러서 li 생성 */}
            {carArray.map(function (car) {
                return (
                    <ListItem car={car} key={car.id} removeText={removeText} />
                );
            })}
        </ul>
    );
}

export default HookArray;
