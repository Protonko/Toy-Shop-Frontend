import {useEffect} from 'react';

export const usePagination = (
  callback: () => void,
  pageIncrease?: () => void,
) => {
  const onScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.body.scrollHeight
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (windowHeight + scrollTop >= documentHeight) {
      pageIncrease?.();
      callback();
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  })
};
