import react, { forwardRef } from "react";

class TodoApp extends react.Component {
    constructor(props) {
        super(props);

        this.state = {'items': [], 'currentItem': ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newTodoItem = this.state.currentItem;
        this.setState({'items': this.state.items.concat(newTodoItem)})
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({'currentItem': e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> 
                        Add Todo:
                        <input type="text" value={this.state.currentItem} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            
                {this.state.items.map( (item, idx) => 
                    <li key={idx}>
                        {item}
                    </li>
                )}
            </div>
            
        );
    }


}

export default TodoApp;



// Follow-up constructor(props) + super(props)
// program backtick