import { useEffect, useRef, useState } from 'react';
import { FormElement } from '@/components/Form/types';

export const useFormControl = <Control extends FormElement>(
  recievedValue: string,
  onInvalid: (control?: Control) => void,
  onValid: (control?: Control) => void
) => {
  const controlRef = useRef<Control>();
  const [isTouched, setTouched] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (controlRef.current) {
      controlRef.current.focus();
    }
  }, [controlRef]);

  useEffect(() => {
    if (recievedValue) {
      setValue(recievedValue);
      // setTouched(true);
    }
  }, [recievedValue]);

  useEffect(() => {
    const control = controlRef.current;
    if (control) {
      const validityCallback = control.validity.valid ? onValid : onInvalid;
      if (validityCallback) validityCallback(control);
    }
  }, [value, isTouched, onInvalid, onValid]);

  return {
    controlRef,
    isTouched,
    setTouched,
    value,
    setValue,
  };
};
