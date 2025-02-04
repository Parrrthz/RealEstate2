export const updateFavourites = (id,favourites)=>{
    if(favourites.include(id)){
        return favourites.filter((resId)=>resId !== id)
    }
    else{
        return [...favourites,id]
    }
};


export const checkFavourites = (id, favourites)=>{
    return favourites?.include(id)? "8ac243" : "white"
};



export const validateString = (value)=>{
    return  value?.length < 3 || value === null ? "Must have atleast  3 characters": null ;
};