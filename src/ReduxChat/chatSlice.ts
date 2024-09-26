import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../chatTypes";
import { mockInitialMessages } from "../mockMessages";

type ChatSliceSchema = {
    messages: Message[]
    inputValue: string
}

const initialState: ChatSliceSchema = {
    messages: mockInitialMessages,
    inputValue: ''

}

const chatClice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        insertMessageMutation: (state, {payload}: PayloadAction<Message>) => {
            state.messages.push(payload)
        },

        onChangeInputValue: (state, {payload}: PayloadAction<string>) => {
            state.inputValue = payload
        }
    }
})

export const {
    actions: chatSliceActions,
    reducer: chatSliceReducer,
} = chatClice