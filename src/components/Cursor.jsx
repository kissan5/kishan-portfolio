import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const curRef = useRef(null);
  const cur2Ref = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const cur2 = cur2Ref.current;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
    };

    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      cur2.style.left = rx + 'px';
      cur2.style.top = ry + 'px';
      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMouseMove);
    tick();

    const hoverEls = document.querySelectorAll('a, button, .b-card, .sk-group');
    const addHover = () => document.body.classList.add('hovering');
    const removeHover = () => document.body.classList.remove('hovering');

    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef}></div>
      <div id="cur2" ref={cur2Ref}></div>
    </>
  );
};

export default Cursor;
