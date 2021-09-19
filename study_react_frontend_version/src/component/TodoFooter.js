import todofooter from '../css/footer.module.css';

function TodoFooter(){
    return(
    <footer className={todofooter.footer}>
        <div className={todofooter.section}>
            <div>
                Todo APP
            </div>
            <div>
                &copy; Copyright All right reserved.
            </div>
        </div>
    </footer>
    );
}

export default TodoFooter;