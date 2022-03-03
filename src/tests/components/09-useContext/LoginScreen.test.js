import { mount, shallow } from "enzyme"
import React ,{ useState } from "react"
import { LoginScreen } from "../../../components/09-useContext/LoginScreen"
import { UserContext } from "../../../components/09-useContext/UserContext"

describe('LoginScreen tests', () => {
    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={ {setUser} }>
            <LoginScreen />
        </UserContext.Provider>
    )
    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('should execute setUser with the argument', () => {
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            id:423234,
            name:'Miguel Angel Ramirez Tenorio',
        });
    })
})