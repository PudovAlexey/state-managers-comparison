import { atom } from "recoil";
import { mockInitialMessages } from "../mockMessages";
import { Message } from "../chatTypes";

const initialState = {
    inputValue: atom({
        key: 'inputValue',
        default: '',
    }),
    messages: atom({
        key: 'messages',
        default: mockInitialMessages
    })
}

const RecoilChatSlice = {
    initialState,
}

export const {
    initialState: recoilState,
} = RecoilChatSlice;