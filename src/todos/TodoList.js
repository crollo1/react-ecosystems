import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markAsCompleted } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (

    <div className='list-wrapper'>
        <h1 className='main-heading'>My Todo List</h1>
        <NewTodoForm />
        <h2 className='sub-heading'>Get Going and Tick Off Some Tasks!</h2>
        {todos.map(todo => <TodoListItem 
            todo={todo} 
            key={todo.text} 
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
            />
        )}
    </div>

);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markAsCompleted(text))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
