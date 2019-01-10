import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../actions/userActions';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HomePage} from './InfoPage.test';

configure({adapter: new Adapter()});

describe('InfoPage', () => {
    // beforeEach(() => {
    //     wrapper = shallow(<InfoPage/>);
    // });


    it('wraps content in a div with', () => {

    })
});

