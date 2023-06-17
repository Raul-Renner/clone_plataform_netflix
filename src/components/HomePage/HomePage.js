
import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';
import MovieRow from '../../components/MovieRow/MovieRow';
import FeatureMovie from '../../components/FeatureMovie/FeatureMovie';

import MenuMovie from '../../components/Header/MenuMovie';


import FavoriteIcon from '@material-ui/icons/Favorite';


import imgReload from '../../../src/Netflix_LoadTime.gif';

import '../../App.css';

function HomePage(){
const [movieList, setMovieList] = useState([]);
const [featureData, setFeatureData] = useState(null);
const [blackHeader, setBlackHeader] = useState(false);


  useEffect( () => {
    // eslint-disable-next-line no-unused-vars
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getAllHomeList();
      console.log(list);
      setMovieList(list);



      //pegando o featured
      let originals = list.filter( i => i.slug === 'originais');
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
        if(window.scrollY > 10){
          setBlackHeader(true);
        }else{
          setBlackHeader(false);
        }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[]);  
    return (
      <div className="page">
      <MenuMovie black={blackHeader} />
      {featureData &&
        <FeatureMovie item={featureData} tipo={'tv'}/>
      }  
        <section className="lists">
          {movieList.map((item, key) =>(
            <div>
              <MovieRow key = {key} title = {item.title} items = {item.items}  />
            </div>
          ))}
        </section>
          
          <footer>
            Feito com <span role="img" aria-label="coração"><FavoriteIcon/></span> pelo RRWeb <br/>
            Direitos de imagem para Netflix <br/>
            Dados pegos do site Themoviedb.org
          </footer>
            {movieList.length <= 0 && 
              <div className="reload">
                <img src={imgReload} alt=""/>
              </div>
              
            }
            
        </div>
    );
}

export default HomePage;