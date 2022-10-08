import React from 'react'
import { useTodos } from '../../context/use-todos';
import { Todo } from '../interfaces/todosInterfaces';


export interface ItemTodoProd {
    todo: Todo | undefined
}

export const ItemTodo: React.FC<ItemTodoProd> = ({
    todo
}) => {

    const { obtenerTodoPorId, todoActual } = useTodos();

    const handleClick = async () => {
        try {
            await obtenerTodoPorId(todo?.id);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <li onClick={handleClick} key={todo?.id}> 
            {todo?.title}
        </li>
    );

}