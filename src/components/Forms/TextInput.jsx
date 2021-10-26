import * as React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = (props)=>{
    return(
<TextField 
fullWidth={true}
id="standard-basic" 
label={props.label}
margin={"dense"}
multiline={props.multiline}
rows={props.rows}
value={props.value}
type={props.type}
onChange={props.onChange} 
variant="standard" 
/>
    )

}

export default TextInput;