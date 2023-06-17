// eslint-disable-next-line no-unused-vars
import {getPage} from '../src/scripts/pageRandom';
const API_KEY = 'fbed1cf368c620f580b22764f8bd4cf8';
// eslint-disable-next-line no-unused-vars
const BASE_URL = 'https://api.themoviedb.org/3';


 
/**
 * - originais da netflix
 * recomendados (trending)
 * em alta (top rated)
 * ação
 * animação
 * terror
 * romance
 * documentários
 * 
 */

const basicFetch = async (endpoint) => {
    const request = await fetch(`${BASE_URL}${endpoint}`);
    //console.log(`${BASE_URL}/discover/movie?language=pt-BR&api_key=${API_KEY}`);

    const json = await request.json();
    return json;
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async() => {
        return[
            {   
                slug: 'FilmesOriginais',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/movie?with_network=213&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title:  'Recomendado para você',
                items: await basicFetch(`/trending/movie/week?page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'toprated',
                title:  'Em Alta',
                items: await basicFetch(`/movie/top_rated?page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'action',
                title:  'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'comedy',
                title:  'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'horror',
                title:  'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'romance',
                title:  'Romance',
               items: await basicFetch(`/discover/movie?with_genres=10749&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'documentary',
                title:  'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },

        ];
    },

    getAllHomeList: async() => {
        return [
            {   
                slug: 'originais',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_network=213&page=${getPage()}&language=pt-BR`)
            },
            {
                slug: 'trending',
                title:  'Recomendado para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'toprated',
                title:  'Em Alta',
                items: await basicFetch(`/movie/top_rated?page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'Action & Adventure',
                title:  'Séries de Ação e Aventura',
                items: await basicFetch(`/discover/tv?with_genres=10759&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'romance',
                title:  'Filmes de Romance',
               items: await basicFetch(`/discover/movie?with_genres=10749&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'comedy',
                title:  'Séries de Comédia',
                items: await basicFetch(`/discover/tv?with_genres=35&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'horror',
                title:  'Filmes de Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'drama',
                title:  'Séries Dramáticas',
                items: await basicFetch(`/discover/tv?with_genres=18&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'action',
                title:  'Filmes de Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
        
            },
            {
                slug: 'documentary',
                title:  'Documentários',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=99&language=pt-BR&page=${getPage()}`)
        
            },
        ];
        //filmes acao
    },
    getHomeListSerie: async() => {
        return [
        
                {   
                    slug: 'SeriesOriginais',
                    title: 'Originais do Netflix',
                    items: await basicFetch(`/discover/tv?with_network=213&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'trending',
                    title:  'Recomendado para você',
                    items: await basicFetch(`/trending/tv/week?page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
            
                },
                {
                    slug: 'toprated',
                    title:  'Em Alta',
                    items: await basicFetch(`/tv/top_rated?page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
            
                },
                {
                    slug: 'action&Adventure',
                    title:  'Ação e Aventura',
                    items: await basicFetch(`/discover/tv?with_genres=10759&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
            
                },
                {
                    slug: 'comedy',
                    title:  'Comédia',
                    items: await basicFetch(`/discover/tv?with_genres=35&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
            
                },
                {
                    slug: 'drama',
                    title:  'Drama',
                    items: await basicFetch(`/discover/tv?with_genres=18&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
            
                },
                {
                    slug: 'soap',
                    title:  'Novelas',
                   items: await basicFetch(`/discover/tv?with_genres=10766&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
            
                },
                {
                    slug: 'animation',
                    title:  'Animação',
                   items: await basicFetch(`/discover/tv?with_genres=16&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
            
                },
                {
                    slug: 'crime',
                    title:  'Crime',
                   items: await basicFetch(`/discover/tv?with_genres=80&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
            
                },
                {
                    slug: 'documentary',
                    title:  'Documentários',
                    items: await basicFetch(`/discover/tv?with_genres=99&page=${getPage()}&language=pt-BR&api_key=${API_KEY}`)
            
                },
    
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if(movieId){
            // eslint-disable-next-line default-case
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                default:
                    info = null;
                break;
                
            }
        }
        return info;
    }

}