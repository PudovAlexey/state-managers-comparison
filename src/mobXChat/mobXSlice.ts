import { Message } from "../chatTypes";
import { mockInitialMessages } from "../mockMessages";
import { makeAutoObservable } from "mobx"

class ChatSlice {
    messages: Message[] = mockInitialMessages
    inputValue: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    insertMessageMutation(value: Message) {
        this.messages.push(value)
    }

    onChangeInputvalue(value: string) {
        this.inputValue = value;
    }
}

export {
    ChatSlice
}