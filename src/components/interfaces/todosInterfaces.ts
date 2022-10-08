export interface Todo{    
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodosState{
    todos: (Todo[] | undefined);
    todoActual: (Todo | undefined);
    cargandoTodos: boolean;
    obtenerTodos: any;
    obtenerTodoPorId: any;
    setTodoActual : any;
}