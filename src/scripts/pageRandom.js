//teste random page series
const getPage = () => {
    let page = Math.floor(  Math.random() * 4);
    if(page === 0 ){
        page += 1;
    }
   return page;
};


export {getPage};