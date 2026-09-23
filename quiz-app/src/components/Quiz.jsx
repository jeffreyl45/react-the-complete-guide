
// show active question and switch to next question after its been answered
import {useState} from 'react';
export default function Quiz() {
    // array of questions
    // index of currently displayed question
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    return <p>Currently Active Question</p>
}