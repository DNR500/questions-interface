import {
  ChangeEvent,
  FocusEvent,
  InvalidEvent,
  ReactElement,
  MutableRefObject,
  KeyboardEvent,
  ReactNode,
  Children,
  cloneElement,
} from 'react';

import { mergeRefs } from '@/utils/merge-refs';
import { FormElement } from '@/components/Form/types';

import { ControlWrap, HelperText, LabelText, Label } from './styles';
import { useFormControl } from './use-form-control';

interface RefElement<Control, ControlProps> extends ReactElement {
  ref: MutableRefObject<Control>;
  props: ControlProps;
}

export interface FormControlBaseProps<Control> {
  id: string;
  labelText: string;
  onInvalid: (control?: Control) => void;
  onValid: (control?: Control) => void;
  value: string;
  children: ReactNode;
  className?: string;
  onBlur?: (e: FocusEvent<Control>) => void;
  onChange?: (e: ChangeEvent<Control>) => void;
  onKeyDown?: (e: KeyboardEvent<Control>) => void;
  errorMessage?: string;
}

export const FormControlBase = <Control extends FormElement, ControlProps>({
  className,
  errorMessage,
  id,
  labelText,
  onBlur,
  onChange,
  onValid,
  onInvalid,
  children,
  value: recievedValue,
  ...props
}: FormControlBaseProps<Control>) => {
  const { controlRef, isTouched, setTouched, value, setValue } =
    useFormControl<Control>(recievedValue, onInvalid, onValid);

  const onBlurHandle = (e: FocusEvent<Control>) => {
    setTouched(true);
    if (onBlur) onBlur(e);
  };

  const onChangeHandler = (e: ChangeEvent<Control>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  const onSubmitInvalidHandler = (e: InvalidEvent<Control>) => {
    e.preventDefault();
    setTouched(true);
  };

  const controlProps = {
    id,
    isTouched,
    value,
    name: id,
    onBlur: onBlurHandle,
    onChange: onChangeHandler,
    onInvalid: onSubmitInvalidHandler,
  };

  return (
    <Label className={className} isTouched={isTouched}>
      <LabelText>{labelText}</LabelText>
      <ControlWrap>
        {Children.map(
          children as RefElement<Control, ControlProps>[],
          (child: RefElement<Control, ControlProps>) =>
            cloneElement(child, {
              ...props,
              ...controlProps,
              ...child.props,
              ref: mergeRefs<Control>(controlRef, child.ref),
            })
        )}
        {errorMessage && <HelperText>{errorMessage}</HelperText>}
      </ControlWrap>
    </Label>
  );
};
