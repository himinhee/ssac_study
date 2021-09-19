import todolist from '../css/todolist.module.css';
import todostatus from '../css/todostatus.module.css';

function TodoStatus({ number }) {
    return (
        <section className={todolist.section}>
            <div className={todostatus.section}>
                <div className={todostatus.left}>{number}개 남음</div>
                <div className="status-filter">
                    <button type="button" className={todostatus.btn}>
                        전체목록
                    </button>
                    <button type="button" className={todostatus.btn}>
                        남은목록
                    </button>
                    <button type="button" className={todostatus.btn}>
                        완료목록
                    </button>
                </div>
                <div className="status-clear">
                    <button type="button" className={todostatus.btn}>
                        완료목록삭제
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TodoStatus;
