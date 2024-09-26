import { JotaiChat } from './JotaiChat/JotaiChat'
import { EffectorChat } from './EffectorChat/EffectorChat'
import { Box, styled } from '@mui/material'
import {Profiler} from 'react';
import { ContextChat } from './ContextChat/Chat';
import { ReduxChat } from './ReduxChat/ReduxChat';

export default function App() {

  return (
<Profiler id={'ChatProfiling'} onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime) => {
 console.log(actualDuration)
}}>
<ChatBox>
      <ChatWrapper>
        <JotaiChat />
      </ChatWrapper>
      <ChatWrapper  >
        <EffectorChat />
      </ChatWrapper>
      <ChatWrapper>
        <ContextChat/>
      </ChatWrapper>
      <ChatWrapper>
        <ReduxChat/>
      </ChatWrapper>
    </ChatBox>
</Profiler>
  )
}

const ChatBox = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
})

const ChatWrapper = styled(Box)({
  border: '1px solid gray',
  padding: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})