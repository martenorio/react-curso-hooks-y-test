import { mount } from "enzyme";
import React from "react";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('AppRouter tests', () => {
    const user = {
        name:"miguel",
        email:"m@gmail.com"
    }
    const wrapper = mount(
        <UserContext.Provider value={ {user} }>
            <AppRouter />
        </UserContext.Provider>
    )

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})