import { atomWithImmer } from "jotai-immer";
import { Message } from "../chatTypes";
import { mockInitialMessages } from "../mockMessages";
import { atom } from "jotai";

const initialState = {
    $messages: atomWithImmer<Message[]>(mockInitialMessages),
    $inputValue: atomWithImmer(''),
}

const slice = {
    initialState,
    selectors: {
        $messaggesSelector: initialState.$messages,
        $inputValueSelector: initialState.$inputValue
    },
    actions: {
        $insertMessage: atom(null, (get, set, payload: Message) => {
            set(initialState.$messages, (draft) => {
                draft.push(payload);
            });
        }),

        $onInputValueChange: atom(null, (_, set, payload: string) => {
            set(initialState.$inputValue, payload)
        })
    },
}

export const {
    actions: messagesActions,
    selectors: messagesSelectors
} = slice;