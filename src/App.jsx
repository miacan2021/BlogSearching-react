/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import './assets/styles/three-dots.css';
import { AnswersList, Chats, Articles, Hero, About, Nav, Loading} from './components';
import FormDialog from './components/Forms/FormDialog';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCureentId] = useState('init');
  const [dataset] = useState(defaultDataset);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(dataset[currentId].url);
  const [title, setTitle] = useState(dataset[currentId].title);
  const [posts, setPosts] = useState([]);
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setChecked(false)
    async function loadPosts() {
    const response = await fetch(`${url}`)
    if(!response) {
        return;
    }
    const posts = await response.json()
    setPosts(posts)
    setLoading(false)
    setChecked(true)
    }
    loadPosts()
  },[url]);

  const displayNextQuestion = (nextQuestionId, nextDataSet) => {
        addChats({
      text: dataset[nextQuestionId].question,
      type: 'question'
    })
      setAnswers(nextDataSet.answers)
      setCureentId(nextQuestionId)
      setUrl(dataset[nextQuestionId].url)
      setTitle(dataset[nextQuestionId].title)
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
   <Hero />
   <About />
   <section className="find_blog" id="find">
   <Nav title={'FIND ARTICLES'} />
   <div className="find">
   <div className='c-section'>
     <div className='c-box'>
       <Chats chats={chats}/>
       <AnswersList answers={answers} select={selectAnswer} />
       <FormDialog open={open} handleClose={handleClose} />
       </div>
   </div>
   <div className='d-section'>
   <div className='d-box'>
     {loading ? <Loading /> : <Articles posts={posts} title={title} checked={checked} />}
     </div>
   </div>
   </div>
   </section>

   </>
  );
}

export default App;
