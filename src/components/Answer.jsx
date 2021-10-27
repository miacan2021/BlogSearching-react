import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const CustomButton = styled(Button)({
    borderColor: '#f8bbd0',
    color: '#f06292',
    marginBottom: '10px',
    '&:hover': {
        borderColor: 'gray',
        backgroundColor: '#f8bbd0',
        color: '#fff'
    },
  });


const Anser = (props) => {
    return(
        <CustomButton variant="outlined" color="warning" onClick={() => props.select(props.content,props.nextId)}>
            {props.content}
        </CustomButton>
    )
}

export default Anser;