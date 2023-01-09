import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
// import { markAsCompleted } from './actions';
// import { displayAlert } from './thunks';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import './TodoList.css';
import { getTodos, getTodosLoading } from './selectors';

const TodoList = ({ 
    todos = [], 
    onRemovePressed, 
    onCompletedPressed, 
    isLoading, 
    startLoadingTodos,
    // onDisplayAlertClicked 
}) => {
    
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>
    const content = (
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
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()), 
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    // onDisplayAlertClicked: text => dispatch(displayAlert(text)),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
