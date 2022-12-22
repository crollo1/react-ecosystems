import { createTodo, removeTodo, markAsCompleted, loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
    
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
    
        dispatch(loadTodosSuccess(todos));

    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e))
    }
}

export const addTodoRequest = text => async dispatch => {
    
    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));

    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todo/${id}`, {
           method: 'delete' 
        });
        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));

    } catch (e) {
        dispatch(displayAlert(e))
    }
}

export const markTodoAsCompletedRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todo/${id}/completed`, {
           method: 'post' 
        });
        const updatedToDo = await response.json();
        dispatch(markAsCompleted(updatedToDo));

    } catch (e) {
        dispatch(displayAlert(e))
    } 
} 

export const displayAlert = text => () => {
    alert(text);
};