import React, { useState } from 'react';
import '../styles/questions.css'

export default function Question({questions, setIsValid, setSubmitted, userId}) {
  const [begin, setBegin] = useState(false)
  const onBegin = () => {
    setBegin(true)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    async function addAnswers(data) {
      const res = await fetch('/api/answers', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })

      const resData = await res.json();
      if(!res.ok){
        const errorMsg = document.getElementById('error')
        errorMsg.removeAttribute('hidden')
      }else {
        setSubmitted(true)
        setIsValid(false);
      }
    }

    const answers = document.forms.questionForm
    const formData = new FormData(answers)
    questions.forEach((q, idx) => {
      const data = {
        userId, 
        questionId: q.id,
        body: formData.get(`qt${q.number}`)
      }
      addAnswers(data)
    })
    
  }
  if(begin){
    return (
        <form id='questionForm' className='form' method='post'>
          {questions.map(question => (
            <div key={question.number} id='form-field'>
              <label for={`qt${question.number}`}>{question.body}</label>
              <input id={`qt${question.number}`} name={`qt${question.number}`} type="text" required/>
            </div>
          ))}
          <input id='submit-button' type="submit" onClick={onSubmit} />
          <p hidden id='error'>There was an error submiting your form. 
            Check your answers and try again</p>
        </form>
    )
  }
  return (
    <form className='form'>
      <p id='instructions'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nibh tempus, imperdiet libero eu, feugiat enim. Nam sit amet ipsum massa. Nulla sed quam ut ex pharetra euismod id eget leo. Vestibulum condimentum elit purus, vel molestie massa dapibus quis. Mauris mattis porta eros iaculis auctor. Cras sit amet ligula commodo, feugiat purus et, tempus lacus.
      </p>
      <input type="button" onClick={onBegin} value="Begin"/>
    </form>
  )
}