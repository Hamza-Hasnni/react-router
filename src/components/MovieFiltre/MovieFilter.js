import React from 'react'

const MovieFilter = ({handelSearch}) => {
    return (
        <div>
            <input 
            style={{borderRadius:"15%",
            boxShadow:"5px 2px 2px gray",
            marginTop:"10px"
        }}
            placeholder="Search" 
            onChange={
                e=>handelSearch(e.target.value.trim())
                } />
        </div>
    )
}

export default MovieFilter
