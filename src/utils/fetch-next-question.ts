import { Question } from '@/data/questions';

interface FetchNextQuestion {
  (
    currentQuestion: Question,
    currentAnswer: string,
    questions: Question[]
  ): Promise<Question | undefined>;
}

export const fetchNextQuestion: FetchNextQuestion = (
  currentQuestion,
  currentAnswer,
  questions
) =>
  // mimic server request using a delay
  new Promise((res) => {
    setTimeout(
      () =>
        res(
          questions.find(
            ({ displayCondition: { id, match } }) =>
              id === currentQuestion.id &&
              (!match || match.value === currentAnswer)
          )
        ),
      2000
    );
  });
