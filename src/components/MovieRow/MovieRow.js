import React, {useState, useEffect} from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#141414',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      width: '130vh',
      minHeight: '80vh',
      //padding: theme.spacing(2, 4, 3),
    },
  
  }));

// eslint-disable-next-line import/no-anonymous-default-export
function MovieRow({title, items}){
   

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    const [itemSelected, setItemSelected] = useState(0);

    useEffect(() => {
      
    });

    const [scrollx, setScrollX] = useState(0);


    const handlerLeftArrow = () => {
        let x = scrollx + Math.round(window.innerWidth / 2);

        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handlerRightArrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);

    }
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handlerLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handlerRightArrow} >
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft:scrollx,
                    width: items.results.length  * 150
                }}>
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movieRow--item" onClick={handleOpen} >
                    <img src={`https://image.tmdb.org./t/p/w300${item.poster_path}`} alt={item.original_title}/>

                    </div>
                ))}
                
                </div>
                
            </div>

            <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="movieRow--item--modal">
          
              <div className="movie--row--featured--buttons">
                <a href="#" className="movie--row--featured--watchbutton">► Assistir</a>
                <a href="#" className="movie--row--featured--mylistItens"> + </a>
                <a href="#" className="movie--row--featured--mylistItens"> <ThumbUpIcon style={{fontSize: 13, alignItems: 'center'}}/> </a>
                <a href="#" className="movie--row--featured--mylistItens"> <ThumbDownIcon style={{fontSize: 13, alignItems: 'center'}}/> </a>

              </div>
              <div className="feature--name">
                {title}
              </div>
            </div>

            <div className="data-movie--row--featured">
              <div className="movie--row--infor--featured">
                  <div className="movie--row--scores--featured">
                    <h5>Scores</h5>
                  </div>
                  <div className="movie--row--description--featured">
                    <h5>descrition</h5>
                  </div>
              </div>

              <div className="movie--row--infor--artist--featured">
                <div className="movie--row--artists">
                  <strong>Elenco: </strong>
                </div>

                <div className="movie--row--genres">
                  <strong>Gênero: </strong>
                </div>
                <div className="movie--row--moments--scenes">
                  <strong>Cenas e momentos: </strong>
                </div>
              </div>
             
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
        </div>
    );
}
export default MovieRow;