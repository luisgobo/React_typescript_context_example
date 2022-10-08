import React from "react";
import { createContext, useContext } from "react";
import { Todo, TodosState } from "../components/interfaces/todosInterfaces";


const INITIAL_STATE: TodosState ={
    todos: [],
    todoActual: undefined,
    cargandoTodos: false,
    obtenerTodos: () => { },    
    obtenerTodoPorId: () => { },
    setTodoActual: () => { },
}

const TodosContext = createContext(INITIAL_STATE);

export interface TodosContextProviderProps{
    children: JSX.Element | JSX.Element[]
}

export const TodosContextProvider : React.FC<TodosContextProviderProps> = ({ children }) =>{
    
    const [todos, setTodos] = React.useState<Todo[] | undefined>(undefined);
    const [todoActual, setTodoActual] = React.useState<Todo | undefined>(undefined);
    const [cargandoTodos, setCargandoTodos] = React.useState<boolean>(false);

    const obtenerTodos = React.useCallback( async () =>{
        try {
            setCargandoTodos(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const todos = await response.json();
            setTodos(todos);
            setCargandoTodos(false);
        } catch (error) {
            console.log(error);
        }
    },[]);

    const obtenerTodoPorId = React.useCallback( async (id: number) =>{
        try {
            setCargandoTodos(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const todo = await response.json();            
            setTodoActual(todo);
            setCargandoTodos(false);
            return todo;
        } catch (error) {
            console.log(error);
        }
    },[]);
    
    
    
    const contextValue : TodosState = {
        todos,
        todoActual,
        cargandoTodos,
        obtenerTodos,
        obtenerTodoPorId,
        setTodoActual
    }
    
    return(
        <TodosContext.Provider value={ contextValue }>
            {children}
        </TodosContext.Provider>
    );
};


export const useTodos = () => useContext(TodosContext);

