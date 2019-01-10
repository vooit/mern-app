import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import * as Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });
