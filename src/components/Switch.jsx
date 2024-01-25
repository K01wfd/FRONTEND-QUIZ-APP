import React, { useState } from 'react';
import { styled } from 'styled-components';
import moonIconLight from '../assets/images/icon-moon-light.svg';
import moonIconDark from '../assets/images/icon-moon-dark.svg';
import sunIconLight from '../assets/images/icon-sun-light.svg';
import sunIconDark from '../assets/images/icon-sun-dark.svg';

const ColorSwitch = styled.div`
  margin-left: auto;
  gap: 0.8rem;
  & img {
    max-width: 1.6rem;
  }

  & .toggleContainer {
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & .toggleContainer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & .toggleContainer .checkmark {
    height: 20px;
    width: 30px;
    background-color: var(--purple);
    border-radius: 1rem;
  }
  & .checkmark:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: var(--color-100);
    border-radius: 50%;
    top: 15%;
    left: 15%;
    transition: all 0.3s ease;
  }
  & input:checked ~ .checkmark:after {
    left: 45%;
  }
  @media only screen and (min-width: 768px) {
    & img {
      max-width: 2.4rem;
    }
  }
`;
function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleColorChange = (event) => {
    setIsChecked(event.target.checked);

    document.body.classList.toggle('dark');
  };
  console.log(isChecked);
  return (
    <ColorSwitch className='flex align-items-center'>
      <img
        className='sunIcon'
        src={isChecked ? sunIconLight : sunIconDark}
        alt='sun icon'
      />
      <label
        htmlFor='toggle'
        className='toggleContainer flex align-items-center'
      >
        <input
          type='checkbox'
          name='toggle'
          id='toggle'
          onChange={(event) => handleColorChange(event)}
        />
        <span className='checkmark'></span>
      </label>
      <img
        className='moonIcon'
        src={isChecked ? moonIconLight : moonIconDark}
        alt='moon icon'
      />
    </ColorSwitch>
  );
}

export default Switch;
