import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Questions from './components/Question'
import './App.css';
import NewCarousel from "./components/NewCarousel";

function App() {
  const [userId, setUserId] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [questions, setQuestions] = useState([])

  const setId = (e) => {
    setUserId(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()

    async function validateUser() {
      console.log(userId);
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
      } else {
        setIsValid(true);
      }
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
  return (
    <div className="App">
    <h1>Hi Tyna</h1>
    <form onSubmit={onSubmit}>
      <input id="getId" onChange={setId}/>
      <input type="submit" value="login"/>
    </form>
    <Modal 
      isOpen={isValid}>
        <NewCarousel questions={questions}></NewCarousel>

    </Modal>
    </div>
  );
}

export default App;
