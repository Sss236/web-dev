const TodoItem = ({
    todo = {
        done:true,
        title:'Buy milk',
        statue:'COMPLETED'
    }
}) =>{
    return(
        <li>
            <input type="checkbox"
                defaultChecked = {todo.done} />
            {todo.title}
            ({todo.status})
        </li>
    );
}

export default TodoItem;



