import List from '@mui/material/List';
import {Chat} from './index'
import { styled } from '@mui/material/styles';

const ChatsArea = styled(List)({
    height: "500px",
    padding: "0",
    overflow: "auto"
  });

const Chats = (props) => {
    return(
        <ChatsArea id={'scroll-area'}>
       {props.chats.map((chat, index) => {
               return <Chat text={chat.text} type={chat.type} key={index.toString()} />
            })}
        </ChatsArea>
    )
}

export default Chats;