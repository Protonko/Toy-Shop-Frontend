import {ReactComponent as Vk} from 'assets/icons/vk.svg';
import {ReactComponent as Facebook} from 'assets/icons/facebook.svg';
import {ReactComponent as Twitter} from 'assets/icons/twitter.svg';
import {ReactComponent as Instagram} from 'assets/icons/instagram.svg';
import {ISocials} from 'typing/interfaces';

export const socialsData: Array<ISocials> = [
  {
    href: 'https://vk.com',
    Icon: Vk,
  },
  {
    href: 'https://facebook.com',
    Icon: Facebook,
  },
  {
    href: 'https://twitter.com',
    Icon: Twitter,
  },
  {
    href: 'https://instagram.com',
    Icon: Instagram,
  }
];
