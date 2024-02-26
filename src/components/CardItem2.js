import React from 'react';
import { Link } from 'react-router-dom';

function CardItem2(props) {
  return (
    <>
      <li className='cards__item cards__item-second'>
      <Link className='cards__item__link' to={props.path}>
        <div>
          <img
            className='cards__item__img'
            alt='Travel Image'
            src={props.src}
            style={{ height: '24px', width: '24px' }}
          />
        </div>
        <div className='cards__item__info'>
          <h5 className='cards__item__text-h1'>{props.label}</h5>
          <h5 className='cards__item__text-p'>{props.text}</h5>  
        </div>
      </Link>
    </li>
    </>
  );
}
export default CardItem2;
