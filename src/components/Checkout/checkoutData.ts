// types
export interface IInputs {
  id: number,
  name: string,
  placeholder: string,
  label: string,
}

export const INPUTS_CHECKOUT: Array<IInputs> = [
  {
    id: 0,
    name: 'phone',
    placeholder: 'Phone number',
    label: 'Phone number',
  },
  {
    id: 1,
    name: 'city',
    placeholder: 'City',
    label: 'City',
  },
  {
    id: 2,
    name: 'name',
    placeholder: 'Name',
    label: 'Name',
  },
  {
    id: 3,
    name: 'email',
    placeholder: 'Email',
    label: 'Email',
  },
  {
    id: 4,
    name: 'comment',
    placeholder: 'Comment',
    label: 'Comment',
  },
];
