import { forwardRef } from 'react';

import { Select } from '@/components/Form/Select';
import { SingleOptionAnswer } from '@/data/questions';
import { ControlProps } from '@/components/QuestionComponents/types';

type Props = ControlProps<SingleOptionAnswer, HTMLSelectElement>;

export const SingleOptionAnswered = forwardRef<HTMLSelectElement, Props>(
  (
    {
      id,
      question,
      answer: { validation, propertyName, options, defaultValue = '' },
      userAnswers = {},
      ...props
    },
    ref
  ) => {
    const userAnswer = userAnswers[propertyName] || defaultValue;

    return (
      <Select
        {...props}
        {...validation}
        id={id}
        labelText={question}
        value={userAnswer}
        ref={ref}
      >
        {options.map(({ value, label }) => (
          <option value={value} key={`${value}_${label}`}>
            {label}
          </option>
        ))}
      </Select>
    );
  }
);

SingleOptionAnswered.displayName = 'SingleOptionAnswered';
