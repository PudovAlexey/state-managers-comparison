import styled from "@emotion/styled";
import { Box, Button, Input, Typography } from "@mui/material"
import { RecoilRoot, useRecoilState } from "recoil";
import { Message as MessageType } from "../chatTypes";
import React from "react";
import { recoilState } from "./RecoilChatSlice";

const {inputValue: inputValueState, messages: messagesState} = recoilState;

const ChatMessage = React.memo(({ id, message }: MessageType) => {
    
    return (
        <Message key={id}>{message}</Message>
    )
})

function RecoilChatContent() {

    const [inputValue, setInputValue] = useRecoilState(inputValueState);
    const [messages, setMessages] = useRecoilState(messagesState);

    return (
        <Box>
            <Typography>Recoil</Typography>
            <Box>
                <MessagesBox>
                    {messages.map(({ id, message }) => (
                        <ChatMessage id={id} key={id} message={message} />
                    ))}
                </MessagesBox>
                <Input value={inputValue} onChange={(e: any) => setInputValue(e.target.value)} />
                <Button onClick={() => {
                    setMessages((prev) => [...prev, {
                        id: `${Date.now()}`,
                        message: inputValue
                    }])
                    setInputValue('')
                }}>Отправить</Button>
            </Box>
        </Box>
    )
}

function RecoilChat() {
    return (
        <RecoilRoot>
            <RecoilChatContent/>
        </RecoilRoot>
    )
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
    RecoilChat
}