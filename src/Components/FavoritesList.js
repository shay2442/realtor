import React from 'react'

function FavoritesList({ listings }) {
   


    return(
        <div>
            <ul className='cards'>
                {listings.map(listing => {
                    <ListingCard
                    key={listing.id} 
                    listing={listing}
                    deleteListing={deleteListing}
                    updateFavorite={updateFavorite}/>
                })}
            </ul>

        </div>
    )
}


export default FavoritesList

