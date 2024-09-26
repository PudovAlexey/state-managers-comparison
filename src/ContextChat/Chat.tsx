import { Box, Typography, Input, Button } from "@mui/material";
import React from "react";
import { ChatContextProvider, useGetMessages } from "./ContextChat";
import { Message as MessageType } from "../chatTypes";
import styled from "@emotion/styled";

const ChatMessage = React.memo(({id, message}: MessageType) => {
    return (
        <Message key={id}>{message}</Message>
    )
})

function ChatContextContent() {

    const {messages, onInsert, input, setInput} = useGetMessages()

    return (
         <Box>
            <Typography>Context</Typography>
            <Box>
                <MessagesBox>
                    {messages.map(({id, message}) => (
                        <ChatMessage id={id} key={id} message={message}/>
                    ))}
                </MessagesBox>
                <Input onChange={(e: any) => setInput(e.target.value)} value={input} />
                <Button onClick={() => {
                    onInsert(input)
                    // handleInsertMessage({
                    //     id: `${Date.now()}`,
                    //     message: inputValue
                    // })

                    setInput('');
                }}>Отправить</Button>
            </Box>
        </Box>
    );

}

const MessagesBox = styled(Box)({
    height: '500px',
    width: '500px',
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    overflow: 'auto',
})

const Message = styled(Box)({
    padding: '12px',
    border: '1px solid gray'
})

function ContextChat() {
    return (
        <ChatContextProvider>
            <ChatContextContent/>
        </ChatContextProvider>
    )
}

export {
    ContextChat
}