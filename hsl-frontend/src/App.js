import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Questions from './components/Questions'
import './App.css';
import './styles/modal.css'
import './styles/main.css'

function App() {
  const [userId, setUserId] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [questions, setQuestions] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const setId = (e) => {
    setUserId(e.target.value)
  }

  const closeModal = () => {
    setIsValid(false)
  }
  const onSubmit = (e) => {
    e.preventDefault()

    async function validateUser() {
      const res = await fetch(`/api/users/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const resData = await res.json();
      if(!res.ok) {
        setIsValid(false)
        console.log("Error")
      }else {
        setIsValid(true);
      }

      const inputBox = document.getElementById("getId")
      inputBox.value = ""
    }
    validateUser()
    
    
  }
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/questions")
      try{
        if(res.ok){
          const data = await res.json()
          setQuestions(data)
        }
      }catch(err) {
        console.error(err)
      }
    })()
  }, [])
  if(!submitted){
    return (
        <div className="App mainContainer">
          <div id="sidebar">
            <img src="/powLogo.webp" />
            <h3>Future of Work</h3>
            <p>We design online experiments to measure skills like teamwork, adaptability and decision-making</p>
            <button>Follow Us</button>
            <div className="links">
              <a href="https://www.pw.hks.harvard.edu/">Home</a>
              <a href="https://www.pw.hks.harvard.edu/about">About</a>
              <a href="https://www.pw.hks.harvard.edu/team">Team</a>
              <a href="https://www.pw.hks.harvard.edu/contact">Contact</a>
            </div>
          </div>
          <div id="main">
            <div id="content">
            <h1>Welcome to the Harvard Skills Lab Survey</h1>
            <h4>To continue, please enter your user id in the field below</h4>
            <form onSubmit={onSubmit}>
              <input id="getId" onChange={setId}/>
              <input id="loginButton" type="submit" value="login"/>
            </form>
            <Modal
            className="modal" 
              isOpen={isValid}>
                <button onClick={closeModal}>X</button>
                <Questions setSubmitted={setSubmitted} setIsValid={setIsValid} questions={questions} userId={userId}></Questions>
      
            </Modal>
            </div>
            </div>
          </div>
    );
  } else{
    return (
      <div id="thank-you">
        <h1>Thank you for your time</h1>
        <p>Your responses have been recorded. You can now safely close your browser</p>
      </div>
    )
  }
}

export default App;
