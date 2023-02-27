import { forwardRef } from 'react';

import { Input } from '../../Form/Input';
import { StringAnswer } from '@/data/questions';
import { ControlProps } from '@/components/QuestionComponents/types';

type Props = ControlProps<StringAnswer, HTMLInputElement>;

export const StringAnswered = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      question,
      answer: { validation, propertyName, defaultValue = '' },
      userAnswers = {},
      ...props
    },
    ref
  ) => {
    const userAnswer = userAnswers[propertyName] || defaultValue;

    return (
      <Input
        {...props}
        {...validation}
        id={id}
        type="text"
        labelText={question}
        value={userAnswer}
        ref={ref}
      />
    );
  }
);

StringAnswered.displayName = 'StringAnswered';
