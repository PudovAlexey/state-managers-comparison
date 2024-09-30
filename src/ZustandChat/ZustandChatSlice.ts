import { create } from "zustand";
import { Message } from "../chatTypes";
import { produce } from 'immer';

type MessagesSchema = {
    messages: Message[]
    input: string
}

type MessageActionsSchema = {
    insertMessageMutation: (message: Message) => void
    setInputValue: (message: string) => void
}

const initialState = {
    messages: [],
    input: '',
}

const useZustandChatSlice = create<MessagesSchema & MessageActionsSchema>((set, get) => ({
...initialState,

insertMessageMutation: (payload: Message) => {
    set(produce((state) => state.messages.push(payload)))
},

setInputValue: (payload: string) => {
    set(produce((state) => state.input = payload))
}
}));

export {
    useZustandChatSlice
}