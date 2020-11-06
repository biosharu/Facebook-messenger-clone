import { IconButton, Button, FormControl, InputLabel, Input } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  //useState = variable in REACT
  //useEffect = run code on a condition in REACT


  console.log(input);
  console.log(messages);

  //Keys make its not re-render when submit a message. Its just render message you've just type
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc') // sort by time 
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id : doc.id, message : doc.data()})))
    });
  }, [])

  useEffect(() => {
    //run code here...
    //if its blank inside [], this code run ONCE when the app component loads
    //if it don't have [], this code run every time anything change
    //if [] have st inside, this code run every time that things inside [] change
    console.log('CALLED!');
    setUsername(prompt('please enter your name!'));
  }, []) //condition


  const sendMessage = (event) =>{
    //all the logic to send a message goes
    event.preventDefault(); //form refresh page when submit so this code make page do not refresh when submit
    //add message too DB when send a message
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() //dung ham serverTimestamp de lay local time
    })

    setInput("");
  }
  //submit in a form make "Enter" to send messages but form make page refresh
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" />
      <h1>Welcome to Messenger</h1>
      <h2>Hello {username}</h2>
      <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </FormControl>
      </form>

      <FlipMove> 
        { 
          messages.map(({id, message}) =>(
            <Message key={id} username = {username} message = {message}/>
          ))
        }
      </FlipMove>      
      
    </div> 
  );
}

export default App;
