import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { Route } from 'react-router';
import Routes from './routes';
import Users from './components/users/users';

import Adapter from 'enzyme-adapter-react-16';
import InfoPage from "./components/infopage/InfoPage";

configure({adapter: new Adapter()});

it('renders correct routes', () => {

    const InfoPage = shallow(<InfoPage/>)
    const wrapper = shallow(<Routes />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
    }, {});

    expect(pathMap['/users']).toBe(props.Users);
});