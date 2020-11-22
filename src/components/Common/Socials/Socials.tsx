// types
import {ISocials} from 'models/interfaces';

import React, {FC} from 'react';
import {SocialsItem} from './SocialsItem';

interface ISocialsProps {
  data: Array<ISocials>,
}

export const Socials: FC<ISocialsProps> = ({data}) => {
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
