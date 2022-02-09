import react, { forwardRef } from "react";

class TodoApp extends react.Component {
    constructor(props) {
        super(props);

        this.state = {'items': [], 'newItem': ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newTodoItem = this.state.newItem;
        this.setState({'items': this.state.items.concat(newTodoItem)})
    }

    handleChange(e) {
        e.preventDefault();
        
        if(e.target.type === "checkbox") {
            const itemsIdx = parseInt(e.target.value);
            
            this.setState(
                {
                    'items': this.state.items.filter( (item,idx) => idx !== itemsIdx)
                }
            );
        }
        else {
            this.setState({'newItem': e.target.value});
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> 
                        Add Todo:
                        <input type="text" value={this.state.newItem} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            
                {this.state.items.map( (item, idx) => 
                    <li key={idx}>
                        <div> 
                            <h2> {item} 
                                <input type="checkbox" value={idx} onChange={this.handleChange}/> 
                            </h2>
                        </div>
                    </li>
                )}
            </div>
            
        );
    }


}

export default TodoApp;



// Follow-up constructor(props) + super(props)
// program backtick