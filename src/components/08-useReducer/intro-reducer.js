const initialState = [{
    id:1,
    todo:'Compras de supermercado',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if(action?.type === "agregar"){
         return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer();

// No utilizar el push en react por que muta el valor de los estado
// y puede causar un error o no hacer nada.(se pudiera utilizar en useRef)

const newTodo = {
    id:2,
    todo:'Pagar recibos de luz',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload:newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);