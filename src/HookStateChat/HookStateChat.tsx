import { Box, Button, Input, Typography } from "@mui/material";
import { chatActions, chatSelectors } from "./HookStateSlice";
import { useHookstate } from "@hookstate/core";
import styled from "@emotion/styled";
import React from "react";
import { Message as MessageType } from "../chatTypes";

const {$inputValue, $messages} = chatSelectors;
const {$setInputValueMutation, $setNewMessagMutation} = chatActions;

const ChatMessage = React.memo(({ id, message }: MessageType) => {
    console.log(message, 'mes');
    return (
        <Message key={id}>{message}</Message>
    )
})

function HookStateChat() {
    const inputValue = useHookstate($inputValue);
    const messages = useHookstate($messages)

    console.log(messages.get())

    return (
        <Box>
            <Typography>HookState</Typography>
            <Box>
                <MessagesBox>
                    {messages.get().map(({ id, message }) => (
                        <ChatMessage id={id} key={id} message={message} />
                    ))}
                </MessagesBox>
                <Input value={inputValue.get()} onChange={(e: any) => $setInputValueMutation(e.target.value)} />
                <Button onClick={() => {
                    $setNewMessagMutation({
                        id: `${Date.now()}`,
                        message: inputValue.get()
                    })
                    $setInputValueMutation('')
                }}>Отправить</Button>
            </Box>
        </Box>
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
    HookStateChat
}