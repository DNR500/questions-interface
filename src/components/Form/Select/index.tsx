import { forwardRef } from 'react';

import { BaseSelect } from './styles';
import { FormControlBase, FormControlBaseProps } from '../FormControlBase';

interface SelectProps extends FormControlBaseProps<HTMLSelectElement> {
  defaultValue?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...props }, ref) => (
    <FormControlBase<HTMLSelectElement, SelectProps> {...props}>
      <BaseSelect ref={ref} autoFocus={true}>
        {children}
      </BaseSelect>
    </FormControlBase>
  )
);

Select.displayName = 'Select';
