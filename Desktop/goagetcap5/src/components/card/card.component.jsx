import React from 'react';
import './card.styles.css'

export const Card = props => {
  const img = props.member.image;
  const photo = require(`${img}`);
  return(
  <div className = 'card-container'>
    <a href={`${props.member.linkedin}`}>
      <img alt='member' src = {photo} style={{width:200,height:200}} />
      <h1 style={{color:'red'}}>{props.member.name}</h1>
    </a>
  </div>
  )
}