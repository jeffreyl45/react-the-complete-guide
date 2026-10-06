// shouldnt make implicit type assumptions
// FC = functional component type

import Todo from '../models/todo'

// if your component gets custom components define custom object tyle in angle brackets
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return (<ul>
     {props.items.map(item => <li key = {item.id}>{item.text}</li>)}
    </ul>);
};

export default Todos;