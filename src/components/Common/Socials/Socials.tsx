// types
import {ISocials} from 'models/interfaces';

import React, {FC} from 'react';
import {SocialsItem} from './SocialsItem';

interface IProps {
  data: Array<ISocials>,
}

export const Socials: FC<IProps> = ({data}) => {
  const renderLink = (link: ISocials, index: number) => (
    <SocialsItem key={index} {...link} />
  );

  return (
    <div className="socials">
      <ul className="socials__list list list--reset">
        {data.map(renderLink)}
      </ul>
    </div>
  )
};
