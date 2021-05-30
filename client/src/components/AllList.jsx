import React from 'react';

import PokeList from './PokeList.jsx';

var AllList = (props) => {

  return (

    <div>
      {props.allPoke.map((pokemon, index) => {

        return(
          <PokeList pokemon={pokemon} key={index}/>
        )

      }

      )}
    </div>

  )

}

export default AllList;

{/*

<div>
<h3>Bulbasaur</h3>
<img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
</div>
<div>
<h3>Ivysaur</h3>
<img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
</div>
<div>
<h3>Venusaur</h3>
<img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
</div>

*/}