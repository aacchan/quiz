import Display from "../components/Display/Display"
import quizData from "../data/quiz"
import Button from "../components/Button/Button";


export default function Quizpage() {
    const quizIndex = 0;

  return (
    <>
        <Display>
            {`Q1. ${quizData[quizIndex].question}`}
        </Display>
        {quizData[quizIndex].options.map((option, index) => (
            <Button key={`option-${index}`}>{option}</Button>
        ))}
    </>
  )
}

