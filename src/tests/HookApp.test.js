import { shallow } from "enzyme";
import React from "react";
import { HookApp } from '../Hook.app';

describe('HookApp Test', ()=>{
    test('should show <HookApp />', () => { 
        const wrapper = shallow( <HookApp /> );
        expect(wrapper).toMatchSnapshot();
     })
})
