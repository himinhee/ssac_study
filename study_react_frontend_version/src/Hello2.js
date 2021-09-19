function Hello2(){
    //변수 선언 시 Javascript의 변수 형태 사용
    let name="React";

    //하기는 일종의 JSX-Javascript Extention : JS 안에서 HTML 사용 - 방식
    return(
        // Return 안에는 1개의 element만 있어야 한다. 
        // 2개 이상의 element를 넣고 싶으면 React.Fragment를 이용
        // React.Fragment 라고 type할 필요 없이 그냥 <> 사용도 가능 - 축약 표현
        <>
            <section className="section01" id="section01">
                Hello {name} in Hello Component - section 1 without using Fragment 
            </section>
            <section className="section02" id="section02">
                Hello {name} in Hello Component - section 2 without using Fragment 
            </section>
        </>
    );
}

export default Hello2;