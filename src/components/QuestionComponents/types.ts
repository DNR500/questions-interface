import { UserData } from '@/data/userdata';

export interface ControlProps<AnswerType, Control> {
  id: string;
  question: string;
  answer: AnswerType;
  userAnswers: UserData;
  onInvalid: (control?: Control) => void;
  onValid: (control?: Control) => void;
}
