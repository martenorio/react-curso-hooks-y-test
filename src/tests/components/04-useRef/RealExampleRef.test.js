import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('RealExampleRef Tests', () => { 
    const wrapper = shallow( <RealExampleRef /> );
    test('should show correctly', () => { 
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHook').exists()).toBe(false);
    })
    test('should show MultipleCustomHool component', () => {
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHook').exists()).toBe(true);
    })
 })