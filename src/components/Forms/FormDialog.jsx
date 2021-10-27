import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from './TextInput';
import { useState } from 'react';


const FormDialog = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
    const inputName = (event) =>{
      setName(event.target.value)
    }
     const inputEmail = (event) =>{
     setEmail(event.target.value)
    }
   const inputDescription = (event) =>{
      setDescription(event.target.value)
    }
  
    
  const submitForm = () =>{
    const payload = {
      text: 'You got a request from chatbot\n' + 
            'name: ' + name + '\n' +
            'email: ' + email + '\n' +
            'request: \n' + description
          }
    const SLACK_URL = process.env.REACT_APP_SLACK
    const url = SLACK_URL
    fetch(url, {
      method:'POST',
      body:JSON.stringify(payload)
    }).then(() => {
   alert('Your request has been sent successfully.Thank you.')
     setName('')
     setEmail('')
     setDescription('')
    return (
      props.handleClose()
      )
    })
  }

return(
  <>
   <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Request a blog post
        </DialogTitle>
        <DialogContent>
       <TextInput 
        label={'Name'}
        multiline={false}
        rows={1}
        value={name}
        type={'text'}
        onChange={inputName}
       />
       <TextInput 
        label={'Email'}
        multiline={false}
        rows={1}
        value={email}
        type={'email'}
        onChange={inputEmail}
       />
       <TextInput 
        label={'Request'}
        multiline={true}
        rows={5}
        value={description}
        type={'text'}
        onChange={inputDescription}
       />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={submitForm} autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
  

     </>
        )
}
export default FormDialog;