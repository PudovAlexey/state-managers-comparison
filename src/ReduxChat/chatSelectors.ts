import { RootState } from "./chatStore";

const chatSlice = (state: RootState) => state.chatSliceReducer;

const messagesSelector = (state: RootState) => chatSlice(state).messages;

const inputValueSelector = (state: RootState) => chatSlice(state).inputValue;

export {
    messagesSelector,
    inputValueSelector,
}