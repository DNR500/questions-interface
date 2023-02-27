export interface FormElement {
  validity: {
    valid?: boolean;
  };
  focus: () => void;
  value: string;
}
