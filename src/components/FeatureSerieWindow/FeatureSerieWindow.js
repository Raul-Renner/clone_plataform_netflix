import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';

import FeatureMovie from '../../components/FeatureMovie/FeatureMovie';
import MovieRow from '../../components/MovieRow/MovieRow';
import Rodape from '../../components/Rodape/Rodape';

import imgReload from '../../../src/Netflix_LoadTime.gif';
import MenuMovie from '../../components/Header/MenuMovie';
// eslint-disable-next-line import/no-anonymous-default-export
function FeatureSerieWindow() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeListSerie();
      setMovieList(list);
    //  console.log(list);


      //pegando o featured
      let originals = list.filter(i => i.slug === 'SeriesOriginais');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeatureData(chosenInfo);
      //  console.log(chosen);
      // console.log(chosenInfo);

    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  return (
    <div>
      <MenuMovie black={blackHeader} />
      {featureData &&
        <FeatureMovie item={featureData} tipo={'tv'} />
      }
        <section className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>

      <footer>
           <Rodape/>
          </footer>
            {movieList.length <= 0 && 
              <div className="reload">
                <img src={imgReload} alt=""/>
              </div>
              
            }
    </div>
  );
}
export default FeatureSerieWindow;