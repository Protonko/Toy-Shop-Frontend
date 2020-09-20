import React, {FC} from 'react';

interface ITileProps {
  href: string,
  image: string,
  title: string,
  description?: string,
}

export const Tile: FC<ITileProps> = ({
  href,
  image,
  title,
  description,
}) => {
  return (
    <a href={href} className="tile">
      <div className="tile__image">
        <div className="tile__image-pic" style={{backgroundImage: `url(${image})`}} />
      </div>

      <div className="tile__data">
        <h2 className="tile__data-title">
          {title}
        </h2>
        <p className="tile__data-description">
          {description}
        </p>
      </div>
    </a>
  )
};
