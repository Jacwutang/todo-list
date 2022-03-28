import react, {useState,  useEffect} from "react";
import InputForm from "./inputForm";
import ListRender from "./listRender";



const TodoApp = () => {
    
    const [todoItem, setTodoItem] = useState("");
    const [todos, setTodos] = useState([]);


    useEffect( () => {
        fetch('http://127.0.0.1:8080/users/1')
        .then(response => response.json())
        .then(data => console.log(data));
    });

    
    const handleInputChange = (e) => {
        e.preventDefault();
        
        const todoItem = e.target.value;
        
        setTodoItem(todoItem);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        const newTodoItem = {'id': Math.random() * 100 ,'val': todoItem};
        
        const newTodos = [...todos, newTodoItem];
        
        const newUserObj = {'userName': newTodoItem['val']};
        fetch('http://127.0.0.1:8080/users', {
            method: 'POST',
            body: JSON.stringify(newUserObj),
            headers: {
                'Content-Type': 'Application/JSON',
              },
            }
        );
        

        setTodos(newTodos);
    }

    return (
        <div>
            <h1> Todo List </h1>
            <InputForm 
                handleInputChange={handleInputChange} 
                handleSubmit={handleSubmit}
            />
            <ListRender items={todos}/>
        </div>
        
    ); 
}

export default TodoApp;
