import { create } from "zustand";
import { Message } from "../chatTypes";
import { produce } from 'immer';
import { mockInitialMessages } from "../mockMessages";

type MessagesSchema = {
    messages: Message[]
    input: string
}

type MessageActionsSchema = {
    insertMessageMutation: (message: Message) => void
    setInputValue: (message: string) => void
}

const initialState = {
    messages: mockInitialMessages,
    input: '',
}

const useZustandChatSlice = create<MessagesSchema & MessageActionsSchema>((set, get) => ({
...initialState,

insertMessageMutation: (payload: Message) => {
    const mes = get().messages;

    set({messages: [...mes, payload]})
},

setInputValue: (payload: string) => {
    set({input: payload})
}
}));

export {
    useZustandChatSlice
}