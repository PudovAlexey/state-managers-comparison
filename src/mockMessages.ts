import { Message } from "./chatTypes";

export const mockInitialMessages: Message[] = new Array(1000)
.fill('')
.map((_, id) => ({
    id: String(id),
    message: 'lorem ipsum'
}))