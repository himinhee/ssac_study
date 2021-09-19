import React from "react";

// file name = function name
function Hello(){
    return(
        // Return 안에는 1개의 element만 있어야 한다. 
        // 2개 이상의 element를 넣고 싶으면 React.Fragment를 이용
        // React.Fragment 라고 type할 필요 없이 그냥 <> 사용도 가능 - 축약 표현
        <React.Fragment>
            <section>Hello React in Hello Component - section 1</section>
            <section>Hello React in Hello Component - section 2</section>
        </React.Fragment>
    );
}

export default Hello;