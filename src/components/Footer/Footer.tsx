import React, {FC} from 'react';
import {socialsData} from './socialsData';
import {Container} from 'components/Common/Container';
import {Socials} from 'components/Common/Socials/Socials';

export const Footer: FC = () => {
  return (
    <footer className="page__footer footer">
      <Container classNames="container page__footer-wrapper">
        <div className="footer__row">
          <div className="footer__col">
            <Socials data={socialsData} />
          </div>
          <div className="footer__col">
            <p className="footer__text">
              © Egor Ermolaev 2020. All right reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
