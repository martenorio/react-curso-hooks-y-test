import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from '../../fixtures/demoTodos';


describe('todoListItem tests', () => {
    const todo = demoTodos[0];
    const handleToggle = jest.fn((id) => { }) // or just jest.fn()
    const handleDelete = jest.fn((id) => { }) // or just jest.fn()
    const wrapper = shallow(
        <TodoListItem
            todo={todo}
            index={0}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />);

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('should execute handleToggle', () => {
        wrapper.find('p').simulate('click')
        wrapper.find('p').simulate('click')
        expect(handleToggle.mock.calls.length).toBe(2)
        expect(handleToggle).toHaveBeenCalledWith(todo.id)
    })
    test('should execute handleDelete', () => {
        wrapper.find('button').simulate('click')
        expect(handleDelete.mock.calls.length).toBe(1);
        expect(handleDelete).toHaveBeenCalledWith(todo.id)
    })
    test('should show the text of todo', () => {
        const textRendered = wrapper.find('p').text();
        expect(textRendered).toBe(`${1} ${todo.desc}`)
    })
    test('should have complete class', () => {
        todo.done = true;
        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            />)
        console.log(wrapper.html());
        expect(wrapper.find('p').hasClass('complete')).toBe(true)
        
    })
})