import react from "react";
import ListDisplay from "./listDisplay";
import InputForm from "./inputForm";

class TodoApp extends react.Component {
    constructor(props) {
        super(props);

        this.state = {'todos': []}

        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(value) {
        let newTodoItem = {'id': Math.random() * 100, 'value': value};
        this.setState({'todos': this.state.todos.concat(newTodoItem)});
    }

    render() {
        return(
            <div>
                <InputForm onHandleSubmit={this.onHandleSubmit}/>
                <ListDisplay items={this.state.todos}/>
            </div>
        )
        
    }

}

export default TodoApp;
