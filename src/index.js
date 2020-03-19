import './styles.css'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { rootReducer } from './redux/rootReducer';
import { increment, decrement, asyncIncrement, changeTheme } from './redux/action';

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");


// function logger(state) {
//     return function(next){
//         return function (action) {
//             console.log('action', action);            
//             console.log('next',next);            
//             console.log('state',state);            
//             return next(action)
//         }
//     }    
// }

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

window.store = store;

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
});

store.subscribe(() => {
    const state = store.getState();

    document.body.className = state.theme.value;
    counter.textContent = state.counter;
});

store.dispatch({ type: 'INIT_APPLICATION' })

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    store.dispatch(changeTheme(newTheme))
});