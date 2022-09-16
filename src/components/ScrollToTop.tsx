import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './scrollToTop.css';

export default function () {
  const [visible, setVisible] = useState(false);
  window.addEventListener('scroll', () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div className="scroll-top">
      <a href="#" className={`${visible ? 'block' : 'none'}`}>
        <AiOutlineArrowUp className="scroll-icon" />
      </a>
    </div>
  );
}
