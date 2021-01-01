import {ReactPortal, ReactNode, useRef} from 'react';
import {createPortal} from 'react-dom';

interface IProps {
  children: ReactNode,
}

const portalRoot = document.getElementById('portal') as HTMLElement;

export const Portal = ({children}: IProps): ReactPortal => {
  const el = useRef(document.createElement('div'));
  portalRoot.appendChild(el.current)

  return createPortal(
    children,
    el.current
  )
}
