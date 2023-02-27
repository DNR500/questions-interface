import { FC } from 'react';

import { Answers } from '@/data/questions';
import { StringAnswered } from './StringAnswered';
import { IntAnswered } from './IntAnswered';
import { SingleOptionAnswered } from './SingleOptionAnswered';
import { ControlProps } from '@/components/QuestionComponents/types';

type HTMLControl = HTMLInputElement | HTMLSelectElement;

interface Props extends ControlProps<Answers, HTMLControl> {
  disabled: boolean;
}

export const QuestionComponents: FC<Props> = ({ answer, ...props }) => {
  switch (answer.type) {
    case 'string':
      return <StringAnswered {...props} answer={answer} />;
    case 'int':
      return <IntAnswered {...props} answer={answer} />;
    case 'singleOption':
      return <SingleOptionAnswered {...props} answer={answer} />;
    default:
      return null;
  }
};
