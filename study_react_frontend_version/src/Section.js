// props.children : 객체 방식
// {children} : 구조 분해 할당 방식

function Section({children}){
    return (
        <section>
            {children}
        </section>
    );
}

export default Section;