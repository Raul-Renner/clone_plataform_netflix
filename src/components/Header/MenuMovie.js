import React from 'react';
import './MenuMovie.css';
import { Link } from 'react-router-dom';


// eslint-disable-next-line import/no-anonymous-default-export
function MenuMovie({black}){
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/archive/0/0c/20201223233934%21Netflix_2015_N_logo.svg" alt="NetFlix"/>

                </a>
            </div>
            <div className="header--menu">
                    <ul className="tabbed-primary-navigation options-menu">
                        <li className="navigation-bar">
                            <a className="current active" href="#" >Inicio</a>
                        </li>
                        
                        <li className="navigation-bar">
                            <div>
                                <Link to="/series">Séries</Link>
                            </div>
                        </li>
                        <li className="navigation-bar">
                        <Link to="/filmes">Filmes</Link>
                        </li>
                    </ul>

            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"/>
                </a>
            </div>

            
        </header>
    );
}
export default MenuMovie;