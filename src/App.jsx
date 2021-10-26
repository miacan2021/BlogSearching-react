/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats, Nav, Articles} from './components';
import FormDialog from './components/Forms/FormDialog';

const App = (props) => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCureentId] = useState('init');
  const [dataset] = useState(defaultDataset);
  const [open, setOpen] = useState(false);

  const displayNextQuestion = (nextQuestionId, nextDataSet) => {
    addChats({
      text: dataset[nextQuestionId].question,
      type: 'question'
    })
      setAnswers(nextDataSet.answers)
      setCureentId(nextQuestionId)
    }


 const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true){
      case(nextQuestionId === 'init'):
      setTimeout(() => displayNextQuestion(nextQuestionId,dataset[nextQuestionId]), 700);
        break;
      case(nextQuestionId === 'contact'):
      handleClickOpen()
      break;
      case /^https:*/.test(nextQuestionId):
          const a = document.createElement('a');
          a.setAttribute('href', nextQuestionId);
          a.setAttribute('target', '__blank');
          a.click();
        break;
      default:
      addChats({
          text: selectedAnswer,
          type:'answer'
        })
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 700);
        break;
    }
  }

  const addChats = (chat) => {
      setChats(prevChats => {
        return [...prevChats, chat]
      })
  }
  const handleClickOpen = () => {
     setOpen(true);
    };


  const handleClose = useCallback(
    () => {
     setOpen(false);
    }, [setOpen]
    );

useEffect(() => {
  const initAnswer = ''
  selectAnswer(initAnswer, currentId)
},　[])

useEffect(() => {
  const scrollArea = document.getElementById('scroll-area');
  if(scrollArea){
    scrollArea.scrollTop = scrollArea.scrollHeight; 
}
})

  return (
    <>
   <Nav />
   <section className='c-section'>
     <div className='c-box'>
       <Chats chats={chats}/>
       <AnswersList answers={answers} select={selectAnswer} />
       <FormDialog open={open} handleClose={handleClose} />
       </div>
   </section>
   <section className='c-section'>
     <Articles />
   </section>
   </>
  );
}

export default App;
