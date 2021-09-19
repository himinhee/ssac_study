// 하나의 component 파일이 여러개의 component를 작성
// map 함수 사용

function ListItem({ value }) {
    return (
        <li>
            {value.name} - {value.color}
        </li>
    );
}
// id: 일종의 key
function HookMap() {
    const carArray = [
        { id: 1, name: 'Fiat', color: 'white' },
        { id: 2, name: 'Kia', color: 'red' },
        { id: 3, name: 'Honda', color: 'Blue' },
    ];

    return (
        <>
            <br />
            <br />
            <br />
            <ul>
                {carArray.map(function (car) {
                    return <ListItem value={car} key={car.id} />;
                })}
            </ul>
        </>
    );
}

export default HookMap;
