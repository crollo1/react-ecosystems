import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
// import { markAsCompleted } from './actions';
// import { displayAlert } from './thunks';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from './selectors';

// * Example of a styled component - called below (commented out)
// const BigRedText = styled.div` //? <-- could've used any HTML element after `styled.`, as in h1, button etc. Once you have a lot of styled component, you can use them in a separate .js file and import. Once you have replaced all the css into the styled components, you can delete the css files completely!!
//     font-size: 48px;
//     color: #FF0000;
// `;

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;
const MainHeading = styled.div`
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 3rem;
    margin-bottom: 1rem;
`;
const SubHeading = styled.div`
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.5rem;
    margin-top: 40px;
`;
const IncompleteHeading = styled.div`
    color: white;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
`;
const CompleteHeading = styled.div`
    color: white;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
`;

const TodoList = ({ 
    completedTodos,
    incompleteTodos, 
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
        <ListWrapper>
            {/* <BigRedText>I'm a styled component!</BigRedText> */}
            <MainHeading>My Todo List</MainHeading>
            <NewTodoForm />
            <SubHeading>Get Going and Tick Off Some Tasks!</SubHeading>
            <IncompleteHeading>Incomplete:</IncompleteHeading>
            {incompleteTodos.map(todo => <TodoListItem 
                todo={todo} 
                key={todo.text} 
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}
                />
            )}
            <CompleteHeading>Complete:</CompleteHeading>
            {completedTodos.map(todo => <TodoListItem 
                todo={todo} 
                key={todo.text} 
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed}
                />
            )}
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()), 
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    // onDisplayAlertClicked: text => dispatch(displayAlert(text)),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
