import { forwardRef, KeyboardEvent } from 'react';
import { Input, InputProps } from '../Input';

type IntInputProps = Omit<InputProps, 'type'>;

export const IntInput = forwardRef<HTMLInputElement, IntInputProps>(
  ({ ...props }, ref) => {
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === '-' || e.key === '+') e.preventDefault();
    };

    return (
      <Input {...props} type="number" onKeyDown={onKeyDownHandler} ref={ref} />
    );
  }
);

IntInput.displayName = 'IntInput';
