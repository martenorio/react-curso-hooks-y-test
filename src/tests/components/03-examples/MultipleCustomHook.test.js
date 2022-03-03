import { shallow } from "enzyme";
import { MultipleCustomHook } from '../../../components/03-examples/MultipleCustomHook';
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");


describe('MultipleCustomHook tests', () => {
    beforeEach( () =>  {
        useCounter.mockReturnValue({
            counter:10,
            increment: () => {}
        });
    })
    test('should show snapshot correctly', () => {
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        });
        const wrapper = shallow(<MultipleCustomHook />);
        expect(wrapper).toMatchSnapshot();
    });
    test('should show loaded information', () => {
        useFetch.mockReturnValue({
            data:[{author:"Miguel",quote:"Holi"}],
            loading:false,
            error:null
        });
        const wrapper = shallow(<MultipleCustomHook />);
        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe("Holi");
        expect( wrapper.find('footer').text().trim() ).toBe("Miguel");
        expect(wrapper).toMatchSnapshot();
    })
})