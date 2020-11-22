import React, {FC, ReactNode} from 'react';

interface IProps {
  children: ReactNode,
  classNames: string,
}

export const Container: FC<IProps> = ({
  children,
  classNames,
}) => (
    <div className={classNames}>{children}</div>
);
