import {useRef, useContext} from 'react';
import {TodosContext} from '../store/todos-context';
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
    // only accessible because we wrapped contextprovider around newTodo in App.tsx
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        // valid input
        todosCtx.addTodo(enteredText);

    }
    return <form onSubmit = {submitHandler} className={classes.form}>
        <label htmlFor='text'>Todo text</label>
        <input type="text" id = 'text' ref ={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
};

export default NewTodo;