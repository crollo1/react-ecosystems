import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    margin-bottom: 1rem;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`  
const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom: ${props => (new Date(props.createdAt) > new Date( Date.now() - 8640000 * 5)
        ? 'none'
        : '3px solid #fc4445'
    )}; 
`
const TodoDate = styled.div`
    color: black;
`
const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 30px;
`
const CompletedButton = styled.button`.
    display: inline-block;
    background-color: #5cdb95;
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`
const RemoveButton = styled.button`
    display: inline-block;
    background-color: #fc4445;
    margin-left: 8px;
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`
const H3 = styled.h3` 
    color: #222222;
`

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {

    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;
    return (
        <Container createdAt={todo.createdAt} >
            <H3>{todo.text}</H3>
            <TodoDate>Created at:&nbsp;
                {(new Date(todo.createdAt)).toLocaleDateString()}
            </TodoDate>
            <ButtonsContainer>
                {
                    todo.isCompleted
                    ? null
                    : <CompletedButton
                        onClick={() => onCompletedPressed(todo.id)}
                        >Mark as Completed</CompletedButton> 
                } 
                <RemoveButton
                    onClick={() => onRemovePressed(todo.id)} 
                    >Remove</RemoveButton>  
            </ButtonsContainer>
        </Container>
    )
};

export default TodoListItem;