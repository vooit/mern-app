import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers';


export default function configureStore(initialState) {
    const middlewares = [
        thunk,
    ];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares),
        )
    );

    return store;
}


