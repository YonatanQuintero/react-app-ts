import React from "react";
import { List, Button, Icon } from 'semantic-ui-react'

interface TodoListProps{
    items:{id:string, text:string}[];
    onDelete:(
        id:string) => void
}

const TodoList: React.FC<TodoListProps> = props =>{

    return <List>{props.items.map(todo=>
                <List.Item key={todo.id}>
                    
                    <Button 
                    circular
                    size="mini"
                    icon
                    onClick={props.onDelete.bind(null,todo.id)}>
                        <Icon color="red" name="cancel"/>
                        </Button>
                        {todo.text}
                </List.Item>)
            }</List>
};

export default TodoList;