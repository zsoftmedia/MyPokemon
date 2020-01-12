import React from 'react'

const Image =(props) => {
    
    return (
    <> 
    <img src={props.image} alt="" className="card-img-top" />
    </>
    )
}

export default Image;