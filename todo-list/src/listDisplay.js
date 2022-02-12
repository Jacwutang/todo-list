import react from "react";

const ListDisplay = (props) => {
    return (
        <ul>
                {
                    props.items.map( (item, idx) => 
                        <li key={item.id}>
                            {item.value}
                        </li>    
                    )
                }
        </ul>
    );
}

export default ListDisplay;