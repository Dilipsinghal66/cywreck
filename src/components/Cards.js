import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem2 from './CardItem2';
import i1 from "../images/i1.png";
import d1 from "../images/d1.png";

function Cards() {
  return (
    <div className='cards'>
      <h1 className='align-section-20'>How Wreckbot Works!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper align-section-10'>
          <ul className='cards__items min-height-215'>
            <CardItem
              src={i1}
              text='Wreckbot scans your entire infrastructure for vulnerabilities, misconfigurations, malware, and other security issues in minutes.'
              label='Step 1: Find all the issues'
              path='/services'
            />
            <CardItem
              src={i1}
              text='Wreckbot generates detailed, actionable reports for every issue it finds, including prioritized recommendations for how to fix them.s'
              label='Step 2: Make a report'
              path='/products'
            />
            <CardItem
              src={i1}
              text='Wreckbot not only provides solutions to each issue, but also helps you understand why the issue exists in the first place, so you can avoid similar issues  in the future.r'
              label='Step 3: Display solutions'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>

      <h1 className='align-section-20'>Product Features</h1>
      <div className='cards__container'>
        <div className='cards__wrapper align-section-10'>
          <ul className='cards__items min-height-300'>
            <CardItem2
             src={d1}
              text='Scans for security issues in your API endpoints and provides actionable recommendations to fix them.'
              label='APIs'
              path='/services'
            />
            <CardItem2
             src={d1}
              text='Scans for security issues in your API endpoints and provides actionable recommendations to fix them.'
              label='APIs'
              path='/services'
            />
           <CardItem2
             src={d1}
              text='Scans for security issues in your API endpoints and provides actionable recommendations to fix them.'
              label='APIs'
              path='/services'
            />
           <CardItem2
             src={d1}
              text='Scans for security issues in your API endpoints and provides actionable recommendations to fix them.'
              label='APIs'
              path='/services'
            />
            <CardItem2
             src={d1}
              text='Scans for security issues in your API endpoints and provides actionable recommendations to fix them.'
              label='APIs'
              path='/services'
            />
           
          </ul>
          <ul className='cards__items min-height-300'>
          <CardItem2
             src={d1}
              text='Scans for security issues in your API endpoints and provides actionable recommendations to fix them.'
              label='APIs'
              path='/services'
            />
           <CardItem2
             src={d1}
              text='Scans for security issues in your API endpoints and provides actionable recommendations to fix them.'
              label='APIs'
              path='/services'
            />
           <CardItem2
             src={d1}
              text='Scans for security issues in your API endpoints and provides actionable recommendations to fix them.'
              label='APIs'
              path='/services'
            />
           <CardItem2
             src={d1}
              text='Scans for security issues in your API endpoints and provides actionable recommendations to fix them.'
              label='APIs'
              path='/services'
            />
            <CardItem2
             src={d1}
              text='Scans for security issues in your API endpoints and provides actionable recommendations to fix them.'
              label='APIs'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
