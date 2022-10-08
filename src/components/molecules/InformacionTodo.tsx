import React from 'react'
import { useTodos } from '../../context/use-todos';

export interface ItemTodoProd {
    id: number | undefined
}

export const InformacionTodo: React.FC<ItemTodoProd> = ({
    id
}) => {

    const { todoActual, setTodoActual } = useTodos();
    
    const handleClick = () =>{
        setTodoActual(undefined);    
    }

    if (!todoActual) {
        return <p>Cargando todo... </p>
    }

    return (
            
            
            <div>
                <h2> { todoActual.title } </h2>
                <p> {todoActual.completed ? "Completado" : "Pendiente"} </p>
                <button onClick={handleClick}>Atras</button>
            </div>
    );

}