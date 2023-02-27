import { useEffect, useState } from 'react';
import { Question } from '@/data/questions';
import { UserData } from '@/data/userdata';
import { fetchNextQuestion } from '@/utils/fetch-next-question';

const getStartQuestion = (questions: Question[]) => {
  const startQuestion = questions.find(
    ({ displayCondition }) => displayCondition?.start
  );

  if (!startQuestion) {
    throw new Error('question set must contain a start question');
  }

  return startQuestion;
};

export const useQuestions = (questions: Question[], userdata: UserData) => {
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserData>(userdata);
  const [question, setQuestion] = useState<Question>(
    getStartQuestion(questions)
  );
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (userdata) setUserAnswers(userdata);
  }, [userdata]);

  useEffect(() => {
    setQuestion(getStartQuestion(questions));
  }, [questions]);

  const submitAnswer = async () => {
    setLoading(true);

    const nextQuestion = await fetchNextQuestion(question, answer, questions);

    if (nextQuestion) {
      setQuestion(nextQuestion);
      setUserAnswers({
        ...userAnswers,
        [question.answer.propertyName]: answer,
      });
    } else {
      setIsComplete(true);
    }
    setLoading(false);
  };

  return {
    question,
    userAnswers,
    loading,
    isComplete,
    setAnswer,
    submitAnswer,
  };
};
