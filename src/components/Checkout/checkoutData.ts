// types
export interface IInputs {
  id: number,
  placeholder: string,
  label: string,
}

export interface IButtons {
  id: number,
  title: string,
  onPress: () => void,
}

export const INPUTS_CHECKOUT: Array<IInputs> = [
  {
    id: 0,
    placeholder: 'Phone number',
    label: 'Phone number',
  },
  {
    id: 1,
    placeholder: 'City',
    label: 'City',
  },
  {
    id: 2,
    placeholder: 'Name',
    label: 'Name',
  },
  {
    id: 2,
    placeholder: 'Name',
    label: 'Name',
  },
  {
    id: 3,
    placeholder: 'Email',
    label: 'Email',
  },
  {
    id: 3,
    placeholder: 'Comment',
    label: 'Comment',
  },
];

export const BUTTONS_CHECKOUT: Array<IButtons> = [
  {
    id: 0,
    title: 'Checkout',
    onPress: () => {},
  },
];
