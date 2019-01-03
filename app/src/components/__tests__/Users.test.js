import React from 'react';
import {shallow, mount} from 'enzyme';

import Users from '../users/Users';

describe('Users', () => {
    let wrapper;

    it('wraps content in a div with .notificationsFrame class', () => {
        wrapper = mount(<Users />);
        expect(wrapper.find('.list-group-item'));
    });

})