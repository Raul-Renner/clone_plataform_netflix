import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
function Rodape(){
    return(
        <div>
             Feito com <span role="img" aria-label="coração"><FavoriteIcon/></span> pelo RRWeb <br/>
                Direitos de imagem para Netflix <br/>
                Dados pegos do site Themoviedb.org
        </div>
    );
}
export default Rodape;
