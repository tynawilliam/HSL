import React, { useState } from "react"
import './App.css';

function App() {
  const [userId, setUserId] = useState("")
  const [isValid, setIsValid] = useState(false)

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
  return (
    <div className="App">
    <h1>Hi Tyna</h1>
    <form onSubmit={onSubmit}>
      <input id="getId" onChange={setId}/>
      <input type="submit" value="login"/>
    </form>
    </div>
  );
}

export default App;
