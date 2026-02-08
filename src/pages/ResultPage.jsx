import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";

export default function ResultPage() {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen
  const correctNumLen = location.state.correctNumLen
  
  return (
    <>
    <h1>{`結果`}</h1>
    <p>{`あなたの正答数は...`}</p>
    <p>{`全${maxQuizLen}問中、${correctNumLen}問正解でした!`}</p>
    <Link to={ROUTES.QUIZ}>もう一度チャレンジしますか? </Link> 
    </>
  )
}