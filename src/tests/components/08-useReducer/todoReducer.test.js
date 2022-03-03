import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('todoReducer test', () => { 
    test('should return default state', () => { 
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos)

    })
    test('should add new todo', () => {
        const newTodo = {
            id:new Date().getTime(),
            desc:'Aprender GO',
            done:false
        }
        const action = {
            type:'add',
            payload:newTodo
        }
        const state = todoReducer(demoTodos, action);
        const lastTodo = state.find(t => t.id === newTodo.id);
        expect(state.length).toBe(3);
        expect(lastTodo).toEqual(newTodo)
        expect(state).toEqual([...demoTodos, newTodo]);
    })
    test('should delete a todo', () => {
        const action = {
            type:'delete',
            payload:2
        }
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([state[0]]);
    })
    test('should TOGGLE todo', () => {
        const action = {
            type:'toggle',
            payload:2
        }
        const state = todoReducer(demoTodos, action);
        const todoToggle = state.find(t => t.id === action.payload)
        expect(todoToggle.done).toBe(true);
    })
 })