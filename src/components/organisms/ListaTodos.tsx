import React from "react";
import { useTodos } from "../../context/use-todos";
import { InformacionTodo } from "../molecules/InformacionTodo";
import { ItemTodo } from "../molecules/ItemTodo";

export const ListaTodos: React.FC = () => {
    const { todos, todoActual, cargandoTodos, obtenerTodos } = useTodos();

    React.useEffect(() => {
        obtenerTodos();
    }, [obtenerTodos])

    if (cargandoTodos) {
        return <p>Cargando...</p>
    }

    if(todoActual){
        return <InformacionTodo id={todoActual.id}/>
    }

    return (
            <ol>
                {todos?.map((todo) => (
                    <ItemTodo key={todo.id} todo={todo} />
                ))}
            </ol>
    )
}