import { forwardRef } from 'react';
import {
  FormControlBase,
  FormControlBaseProps,
} from '@/components/Form/FormControlBase';

import { BaseInput } from './styles';

export interface InputProps
  extends Omit<FormControlBaseProps<HTMLInputElement>, 'children'> {
  type: string;
  defaultValue?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return (
      <FormControlBase<HTMLInputElement, InputProps> {...props}>
        <BaseInput type={type} ref={ref} autoFocus={true} />
      </FormControlBase>
    );
  }
);

Input.defaultProps = {
  type: 'text',
};

Input.displayName = 'Input';
