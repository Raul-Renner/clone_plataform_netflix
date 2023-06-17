import React from 'react';
import './FeatureMovie.css'

// eslint-disable-next-line import/no-anonymous-default-export
function FeatureMovie({item, tipo}){
    console.log(item);
    let firstDate;
    let title;
    let infoTipo;
    if(tipo === 'movie'){
        firstDate = new Date(item.release_date);
        title = item.title;
        infoTipo =   <div className="featured--seasons">{ tipo === 'movie' && item.runtime} min{item.runtime !== 1 ? 's' : '' } </div>

    }else if(tipo === 'tv'){
        firstDate = new Date(item.first_air_date);
        title = item.original_name;
        infoTipo = <div className="featured--seasons">{ tipo === 'tv' && item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : '' }</div>


    }
    let genres = [];

    let description = item.overview;
    if(item.overview.length > 300){
        description = description.substring(0, 300) + '...';
    }
    for(let i  in item.genres){
        genres.push(item.genres[i].name);
    }
    return (
        <section className="featured"
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="feature--vertical">
                <div className="feature--horizontal">
                    <div className="feature--name">
                        {title}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">
                            {item.vote_average} pontos
                        </div>
                        <div className="featured--year">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="featured--seasons">
                           {infoTipo}

                        </div>
                    </div>
                    <div className="featured--description">
                        {description}
                    </div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres">
                        <strong>Gênero: {genres.join(', ')}</strong>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default FeatureMovie;