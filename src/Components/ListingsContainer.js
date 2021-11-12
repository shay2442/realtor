import {useEffect, useState} from 'react'
import ListingCard from './ListingCard'
import Form from './Form'
import {Route, Switch} from 'react-router-dom'

function ListingsContainer({favorites = false, search}) {
    const [listings, setListings] = useState([])
    const [sortBy, setSortBy] = useState('')


    useEffect(() => {
        fetch('http://localhost:3004/listings')
        .then(r => r.json())
        .then(data => {
            setListings(data.reverse())
        })
    },[favorites])
 


    function updateListing(id, data) {
        fetch(`http://localhost:3004/listings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((updatedListing) => {
            const updatedListings = listings.map(listing => {
                if (listing.id === id) {
                    return updatedListing;
                } else {
                    return listing;
                }
            })
            setListings(updatedListings);
        });
    }

   

    let filteredListings = listings.filter((listing) => {
        return listing.location.toLowerCase().includes(search.toLowerCase())
    }).sort((listingA, listingB) => {

        if (sortBy === 'price') {
            return listingA.price - listingB.price
        }else {
            return listings
        }
    })

    if (favorites) {
        filteredListings = filteredListings.filter(listing => listing.favorite)
    }

    return(
<div>
    <button onClick={() => setSortBy('price')}>Price Low to High</button>
  
    {filteredListings.map(listing => {
           return (
            <ListingCard
            key={listing.id} 
            listing={listing}
            updateListing={updateListing}
           />
           )
       })}
</div>
    )
}

export default ListingsContainer;