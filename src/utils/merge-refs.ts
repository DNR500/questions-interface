import { MutableRefObject } from 'react';

export const mergeRefs = <Control>(
  ...refs: MutableRefObject<Control | undefined>[]
) => {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;

  return (inst: Control) => {
    for (const ref of filteredRefs) {
      ref.current = inst;
    }
  };
};
