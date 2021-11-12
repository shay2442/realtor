import React from 'react'
import {UseState} from 'react'
import styled from 'styled-components';

function ListingCard({listing, updateListing}) {
    const {id, image, price, location, favorite, isSold} = listing

    
    function priceWithCommas(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

   

    return(
        <ListingWrapper >
        <div className='card'>
            <img src={image}width="130" height="130" alt='No Pic'/>
            <h2 className='price'>${priceWithCommas(price)}</h2>
            <div className='location'>Location: {location}</div>
            <button className='favorite-bttn' onClick={() => updateListing(id, { favorite: !listing.favorite })}>Favorite:{favorite?'⭐️' : '☆'} </button>
            <button className={isSold ? 'sold' : ''} onClick={() => updateListing(id, {isSold: !listing.isSold})}>{isSold ? 'SOLD' : 'Mark As Sold'}</button>
            

        </div>
        </ListingWrapper>
    )
}


export default ListingCard;

const ListingWrapper = styled.div `
// width: 250px;
    margin: 10px;
    padding: 25px;
    box-shadow:  0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.12);
    border-radius: 5px;`