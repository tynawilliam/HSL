import Carousel from 'nuka-carousel'
import Question from './Question'

export default function NewCarousel({ questions }) {
    return(
        <Carousel>
            {questions.map((question, idx) => (
               <Question key={idx} question={question.body}>

               </Question>
            ))}
            <h2>Are you ready to submit?</h2>
        </Carousel>
    )
}