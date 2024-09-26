import { Box, Button, Input, styled, Typography } from "@mui/material";
import { Message as MessageType } from "../chatTypes";
import { inputValueSelector, messagesSelector } from "./chatSelectors";
import { chatSliceActions } from "./chatSlice";
import { store, useAppDispatch, useAppSelector } from "./chatStore";
import React from "react";
import { Provider } from 'react-redux';

const { insertMessageMutation, onChangeInputValue } = chatSliceActions;

const ChatMessage = React.memo(({ id, message }: MessageType) => {
    return (
        <Message key={id}>{message}</Message>
    )
})

function ReduxChatContent() {
    const dispatch = useAppDispatch();
    const messages = useAppSelector(messagesSelector);
    const inputValue = useAppSelector(inputValueSelector);

    return (
        <Box>
            <Typography>Redux</Typography>
            <Box>
                <MessagesBox>
                    {messages.map(({ id, message }) => (
                        <ChatMessage id={id} key={id} message={message} />
                    ))}
                </MessagesBox>
                <Input value={inputValue} onChange={(e: any) => dispatch(onChangeInputValue(e.target.value))} />
                <Button onClick={() => {
                    dispatch(insertMessageMutation({
                        id: `${Date.now()}`,
                        message: inputValue
                    }))
                    //    handleInsertMessageCallback({
                    //      id: `${Date.now()}`,
                    //      message: input
                    //    });
                    dispatch(onChangeInputValue(''))
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

function ReduxChat() {
    return (
      <Provider store={store}>
        <ReduxChatContent/>
      </Provider>
    )
}

export {
    ReduxChat,
}