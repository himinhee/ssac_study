//props : properties
//component와 component 사이에서 값을 전달할 때 사용하는 객체
//매개변수 2개 받기

function Props3({number, value}){
    return(
        <article className='article'>
            {number} {value}
        </article>
    );
}

export default Props3;