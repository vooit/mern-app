import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()})

import * as actions from '../../actions/userActions'
import * as types from '../../actions/actionTypes'

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const expectedAction = {
            type: types.LOAD_USERS_SUCCESS,
        }
        expect(actions.loadUsersSuccess()).toEqual(expectedAction)
    })
})