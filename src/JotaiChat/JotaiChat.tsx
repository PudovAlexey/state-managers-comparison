import { Box, Button, Input, styled, Typography } from "@mui/material";
import { messagesActions, messagesSelectors } from "./jotaiSlice";
import { useAtomValue, useSetAtom } from "jotai";
import { Message as MessageType } from "../chatTypes";
import React, { useState } from "react";

const {$messaggesSelector, $inputValueSelector} = messagesSelectors;
const {$insertMessage, $onInputValueChange} = messagesActions;



const ChatMessage = React.memo(({id, message}: MessageType) => {
    return (
        <Message key={id}>{message}</Message>
    )
})

const JotaiChat: React.FC = () => {
    const inputValue = useAtomValue($inputValueSelector);
    const messages = useAtomValue($messaggesSelector);

    const handleInsertMessage = useSetAtom($insertMessage)
    const setInput = useSetAtom($onInputValueChange)

    return (
        <Box>
            <Typography>Jotai</Typography>
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
    JotaiChat
}