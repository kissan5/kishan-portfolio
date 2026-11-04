import { useEffect } from 'react';

const useReveal = () => {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.12 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => revealObserver.observe(element));

    return () => {
      revealElements.forEach((element) => revealObserver.unobserve(element));
    };
  }, []);
};

export default useReveal;
