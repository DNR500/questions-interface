import { useState, FC } from 'react';
import ReactLoading from 'react-loading';
import { Question } from '@/data/questions';
import { UserData } from '@/data/userdata';
import { Button } from '@/components/Form/Button';
import { QuestionComponents } from '@/components/QuestionComponents';

import { QuestionContainer, SuccessMessage, ButtonContainer } from './styles';
import { useQuestions } from './use-questions';

interface Props {
  questions: Question[];
  userdata: UserData;
  questionAnimateInTime?: number;
}

export const QuestionsView: FC<Props> = ({
  questions,
  userdata = {},
  questionAnimateInTime = 500,
}) => {
  const [nextButtonHidden, setNextButtonHidden] = useState(true);

  const {
    question,
    userAnswers,
    isComplete,
    setAnswer,
    loading,
    submitAnswer,
  } = useQuestions(questions, userdata);

  const onNextHandler = () => {
    setNextButtonHidden(true);
    submitAnswer().catch((e) => console.error('problem submitting answer', e));
  };

  const onValidHandler = (control?: HTMLInputElement | HTMLSelectElement) => {
    if (control?.value) {
      setAnswer(control.value);
    }

    if (!loading) setNextButtonHidden(false);
  };

  const onInvalidHandler = () => {
    if (!loading) setNextButtonHidden(true);
  };

  return (
    <>
      {isComplete ? (
        <SuccessMessage>Thank you for completing the questions</SuccessMessage>
      ) : question.id ? (
        <QuestionContainer
          animateIn={!loading}
          animateInTime={questionAnimateInTime}
        >
          <QuestionComponents
            {...question}
            answer={question.answer}
            userAnswers={userAnswers}
            onValid={onValidHandler}
            onInvalid={onInvalidHandler}
            disabled={loading}
          />
          <ButtonContainer>
            <Button
              type="button"
              isHidden={nextButtonHidden}
              onClick={onNextHandler}
            >
              Next
            </Button>
            {loading && (
              <ReactLoading
                type="spin"
                color="gainsboro"
                height={42}
                width={42}
              />
            )}
          </ButtonContainer>
        </QuestionContainer>
      ) : null}
    </>
  );
};
