import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокручиваем страницу вверх при изменении маршрута
    // Исключаем случаи с hash (якорными ссылками), чтобы не мешать навигации по секциям
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Мгновенная прокрутка для лучшего UX
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
