import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()})
const fetchMock = require('fetch-mock');
const mock = fetchMock.sandbox().mock('/home', 200);
expect(mock.called('/api')).to.be.true;

fetchMock.mock('http://localhost:3001/api', 200);
const res = await fetch('http://localhost:3001/api');
assert(res.ok);
fetchMock.restore();