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
     The following questions are related to the HSL experiment you recently took part in.
     Please ensure you answer each question as accurately as possible, and submit once you are done.
     Feel free to reach out to any member of our team if you have any questions or concerns.
      </p>
      <input id='beginButton' type="button" onClick={onBegin} value="Begin"/>
    </form>
  )
}