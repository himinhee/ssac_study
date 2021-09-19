function HookArrayCreate({ carname, color, changeText, addText }) {
    return (
        <div>
            {/* type 하면 onchange event 발생 -> changeText 호출 -> event target의 value에 입력값을 넣기 -> value를 화면에 표시 */}
            <input
                type="text"
                placeholder="차 이름을 입력해주세요."
                onChange={changeText}
                name="carname"
                value={carname}
            />
            <input
                type="text"
                placeholder="차 색깔을 입력해주세요."
                onChange={changeText}
                name="color"
                value={color}
            />
            <button type="button" onClick={addText}>
                추가
            </button>
        </div>
    );
}

export default HookArrayCreate;
