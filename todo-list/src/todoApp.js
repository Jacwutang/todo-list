import react, {useState,  useEffect} from "react";

const TodoApp = () => {
    
    const [todoInput, setTodoInput] = useState("");
    
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const todoId = Math.random() * 100;
        
        const newTodo = {id: todoId, value: todoInput};
        
        todos.push(newTodo);

        setTodos(todos);
        setTodoInput("");
        
    }

    const handleChange = (e) => {
        const val = e.target.value;
        setTodoInput(val);    
    }

    const handleDeletion = (e) => {
        const todoId = parseFloat(e.target.value);
        
        const newTodos = todos.filter( (todo) => todo.id !== todoId);
        
        setTodos(newTodos);
    }
    
    return (
        <div>
            <h1> Todo List </h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Enter Todo
                    <input type="input" value={todoInput} onChange={handleChange}/>
                </label>
                <button>
                    Submit
                </button>
            </form>

            <h2> List of Todos </h2>
            <div>
                <ul>
                    {
                        todos.map( (todo,idx) => {
                            
                            return (
                                <li key={todo.id}>
                                    {todo.value}

                                    <input type="checkbox" value={todo.id} onChange={handleDeletion}/>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default TodoApp;
