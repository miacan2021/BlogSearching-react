import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const CustomButton = styled(Button)({
    borderColor: '#F6F0F1',
    backgroundColor: '#F6F5F0',
    color: '#2D2D2B',
    marginBottom: '10px',
    '&:hover': {
        borderColor: '#C39E9E',
        backgroundColor: '#F6F5F0',
        color:'#C39E9E',
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