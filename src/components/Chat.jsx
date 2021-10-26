import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NoProfile from '../assets/img/no-profile.png';
import Me from '../assets/img/icon1.png';

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'

    return(
        <ListItem className={classes}>
          <ListItemAvatar>
            {isQuestion ? (
              <Avatar alt="icon" src={Me} />
              ):(
              <Avatar alt="icon" src={NoProfile} />
            )}
          </ListItemAvatar>
          {isQuestion ? (
               <div className='p-chat__bubble_question'>
                   {props.text}
            </div>
              ):(
                <div className='p-chat__bubble_answer'>
                    {props.text}
            </div>
            )}
        </ListItem>
    )
}

export default Chat;