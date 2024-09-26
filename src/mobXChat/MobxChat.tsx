import { observer } from "mobx-react-lite"
import { Box, Button, Input, styled, Typography } from "@mui/material";
import { messagesActions, messagesSelectors } from "./jotaiSlice";
import { useAtomValue, useSetAtom } from "jotai";
import { Message as MessageType } from "../chatTypes";
import React, { useState } from "react";
import { ChatSlice } from "./mobXSlice";

const ChatMessage = React.memo(({id, message}: MessageType) => {
    return (
        <Message key={id}>{message}</Message>
    )
})



const chatSlice = new ChatSlice();
const MobxChat = observer(() => {
    return (
        <Box>
            <Typography>Mobx</Typography>
            <Box>
                <MessagesBox>
                    {chatSlice.messages.map(({id, message}) => (
                        <ChatMessage id={id} key={id} message={message}/>
                    ))}
                </MessagesBox>
                <Input onChange={(e: any) => chatSlice.onChangeInputvalue(e.target.value)} value={chatSlice.inputValue} />
                <Button onClick={() => {
                    chatSlice.insertMessageMutation({
                        id: `${Date.now()}`,
                        message: chatSlice.inputValue
                    })

                    chatSlice.onChangeInputvalue('');
                }}>Отправить</Button>
            </Box>
        </Box>
    );
});

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
    MobxChat
}