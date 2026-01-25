import { ROUTES } from "../const"
import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <>
        <h1>Quiz  App</h1>
        <Link to={ROUTES.QUIZ}>Start Quiz</Link>

    </>
  )
}
