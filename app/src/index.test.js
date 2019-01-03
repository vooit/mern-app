import Index from './index.js';

jest.mock('react-dom', () => ({render: jest.fn()}))

it('renders without crashing', () => {
    expect(JSON.stringify(
        Object.assign({}, Index, {_reactInternalInstance: 'censored'})
    )).toMatchSnapshot();
});