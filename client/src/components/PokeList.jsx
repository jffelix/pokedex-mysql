import React from 'react';

var PokeList = (props) => {

  return (
    <div>
    <h3>{props.pokemon.name}</h3>
    <img src={props.pokemon.img} />
    </div>
  )

}

export default PokeList;