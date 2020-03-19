import { DECREMENT, INCREMENT, ASYNC_INCREMENT } from "./types";

export function rootReducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state;
    }

}