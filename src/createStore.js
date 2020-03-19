export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, {type: '_INIT_'});
    const subscibers = [];

    return {
        dispatch(action) {
            state = rootReducer(state, action);
            subscibers.forEach(sub => sub());
        },
        subscribe(callback) {
            subscibers.push(callback);
        },
        getState() {
            return state;
        }
    }
}