import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react";
import { Message } from "../chatTypes";
import { mockInitialMessages } from "../mockMessages";

type ContextProps = {
    messages: Message[]
    onInsert: (value: string) => void
    input: string,
    setInput: (value: string) => void
}

const ContextChat = createContext<ContextProps>({
    messages: [],
    onInsert: () => {},
    input: '',
    setInput: () => {},
});


function ChatContextProvider({children}: PropsWithChildren) {
    const [messages, setMessages] = useState<Message[]>(mockInitialMessages)
    const [input, setInput] = useState<string>('');

    const onInsert = useCallback((value: string) => {
        setMessages((prev) => [...prev, {
            id: Date.now(),
            message: value
        }])
    }, [])

    return (
    <ContextChat.Provider value={useMemo(() => ({
        messages,
        onInsert: onInsert,
        input,
        setInput
    }), [input, messages, onInsert])}>
    {children}
    </ContextChat.Provider>
    )

}

function useGetMessages() {
    return useContext(ContextChat)
}

export {
    ChatContextProvider,
    ContextChat,
    useGetMessages
}

