import React, {FC, ReactNode} from 'react';

interface IContainerProps {
  children: ReactNode,
  classNames: string,
}

export const Container: FC<IContainerProps> = ({
  children,
  classNames,
}) => (
    <div className={classNames}>{children}</div>
);
