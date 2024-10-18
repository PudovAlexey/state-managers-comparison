import { hookstate } from "@hookstate/core";
import { Message } from "../chatTypes";
import { mockInitialMessages } from "../mockMessages";

// const globalState = hookstate(0);<

const initialState = {
    $inputValue: hookstate(''),
    $messages: hookstate<Message[]>([...mockInitialMessages])
}

const hookStateSlice = {
    initialState,
    actions: {
        $setInputValueMutation: (payload: string) => {
            initialState.$inputValue.set(payload)
        },

        $setNewMessagMutation: (payload: Message) => {
            initialState.$messages.merge([payload])
        }

    }
}

export const {
    initialState: chatSelectors,
    actions: chatActions
} = hookStateSlice