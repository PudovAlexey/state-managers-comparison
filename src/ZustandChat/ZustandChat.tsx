import { Box, Button, Input, styled, Typography } from "@mui/material";
import { Message as MessageType } from "../chatTypes";
import React from "react";
import { useZustandChatSlice } from "./ZustandChatSlice";

const ChatMessage = React.memo(({id, message}: MessageType) => {
    return (
        <Message key={id}>{message}</Message>
    )
})

function ZustandChat() {
    const messages = useZustandChatSlice((state) => state.messages);
    const inputValue = useZustandChatSlice((state) => state.input);

    const handleInsertMessage = useZustandChatSlice((state) => state.insertMessageMutation);
    const setInput = useZustandChatSlice((state) => state.setInputValue);
    return (
        <Box>
            <Typography>Zustand</Typography>
            <Box>
                <MessagesBox>
                    {messages.map(({id, message}) => (
                        <ChatMessage id={id} key={id} message={message}/>
                    ))}
                </MessagesBox>
                <Input onChange={(e: any) => setInput(e.target.value)} value={inputValue} />
                <Button onClick={() => {
                    handleInsertMessage({
                        id: `${Date.now()}`,
                        message: inputValue
                    })

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

export {
    ZustandChat
}