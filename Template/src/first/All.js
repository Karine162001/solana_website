import React from 'react';
import Up from './Up';
import Join from './Join';
import Made from './Made';
import Boy from './Boy';
import Solana from './Solana';
import Time from './Time';

export default function All() {
  return (
    <div className='forAll'>
        <Up />
        <article>
          <Join />
          <Made />
        </article>
        <Boy />
        <Solana />
        <Time />
        
    </div>
  )
}