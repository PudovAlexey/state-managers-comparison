import { Box, Button, Input, styled, Typography } from "@mui/material";
import { effectorStore } from "./effectorSlice";
import { useStoreMap, useUnit} from 'effector-react';
import { Message as MessageType } from "../chatTypes";
import { useMemo, useCallback } from "react";

function EffectorChat() {
   const [input] = useUnit([effectorStore.initialState.$changeInputValue]);
    const messages = useStoreMap({
      store: effectorStore.initialState.$messages,
      keys: ['id', 'message'],
      fn: (messages) => messages.map(({ id, message }) => ({ id, message })),
    });
  
    const list = useMemo(() => {
      return messages.map(({ id, message }) => (
        <Message key={id}>{message}</Message>
      ));
    }, [messages]);
  
    const [handleInsertMessage] = useUnit([effectorStore.events.$insertMessageEvent]);
    const [setInput] = useUnit([effectorStore.events.$changeInputValue])
  
    const handleInsertMessageCallback = useCallback((message: MessageType) => {
      handleInsertMessage(message);
    }, [handleInsertMessage]);
  
    return (
      <Box>
         <Typography>Effector</Typography>
        <Box>
          <MessagesBox>
            {list}
          </MessagesBox>
          <Input value={input} onChange={(e: any) => setInput(e.target.value)} />
          <Button onClick={() => {
            handleInsertMessageCallback({
              id: `${Date.now()}`,
              message: input
            });
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
    EffectorChat
}