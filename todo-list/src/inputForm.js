import react, { forwardRef, lazy } from "react";


class InputForm extends react.Component{
    
    constructor(props) {
        super(props);

        this.state = {'value': ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({'value': e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onHandleSubmit(this.state.value)
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.value} onChange={this.handleChange}/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }

}

export default InputForm;