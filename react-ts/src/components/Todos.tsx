// shouldnt make implicit type assumptions
// FC = functional component type
import React, {useContext} from 'react';
import TodoItem from './TodoItem'
import classes from './Todos.module.css'
import {TodosContext} from '../store/todos-context';

// if your component gets custom components define custom object tyle in angle brackets
// define the shape props must have
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
