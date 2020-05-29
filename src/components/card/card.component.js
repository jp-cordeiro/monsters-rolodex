import React from 'react';
import './card.component.css'

export const Card = props => {
  return(
    <div className="container">
      <div className="box">
        <div className="imgBox">
          <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster"/>
        </div>
        <div className="contentBox">
          <h2>{props.monster.name}</h2>
        </div>
      </div>
    </div>
  );
}

