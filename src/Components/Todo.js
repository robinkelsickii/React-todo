
const Todo = ({todo}) => {
    return (
        <div className={todo.completed ? "strike" : "" }>
            {todo.task}
        </div>
    )
}
export default Todo