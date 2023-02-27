import { forwardRef } from 'react';

import { IntInput } from '@/components/Form/IntInput';
import { IntAnswer } from '@/data/questions';
import { ControlProps } from '@/components/QuestionComponents/types';

type Props = ControlProps<IntAnswer, HTMLInputElement>;

export const IntAnswered = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      question,
      answer: { validation, propertyName },
      userAnswers = {},
      ...props
    },
    ref
  ) => {
    const userAnswer = userAnswers[propertyName];

    return (
      <IntInput
        {...props}
        {...validation}
        id={id}
        labelText={question}
        value={userAnswer}
        ref={ref}
      />
    );
  }
);

IntAnswered.displayName = 'IntAnswered';
