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
        let newTodoItem = {id: Math.random() * 100, value: this.state.newItem};
        this.setState({'items': this.state.items.concat(newTodoItem)})
    }

    handleChange(e) {
        e.preventDefault();
        
        if(e.target.type === "checkbox") {
            const itemsID = parseFloat(e.target.value);
            console.log(itemsID)
            this.setState(
                {
                    'items': this.state.items.filter( (item,idx) => item.id !== itemsID)
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
                    <li key={item.id}>
                        <div> 
                            <h2> {item.value} 
                                <input type="checkbox" value={item.id} onChange={this.handleChange}/> 
                            </h2>
                        </div>
                    </li>
                )}
            </div>
            
        );
    }


}

export default TodoApp;
