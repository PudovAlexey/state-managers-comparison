import { createEvent, createStore } from "effector";
import { Message } from "../chatTypes";
import { mockInitialMessages } from "../mockMessages";

const initialState = {
  $messages: createStore<Message[]>(mockInitialMessages),
  $changeInputValue: createStore<string>('')
};

const $insertMessageEvent = createEvent<Message>();
const $changeInputValue = createEvent<string>();

const effectorStore = {
    initialState,
    events: {
        $insertMessageEvent,
        $changeInputValue,
    },
    actions: {
        $insertEventMutation: initialState.$messages.on($insertMessageEvent, (state, message) => {
           return [...state, message]
        }),
        $updateInputMutation: initialState.$changeInputValue.on($changeInputValue, (_, value) => value)
    }
}

export {
    effectorStore,
}