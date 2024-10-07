import React from 'react'
import { useRouteError } from 'react-router-dom'
 
const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='error-page'>
            <h1 className='error-h1'>ERROR : {error.status + " " + error.statusText.toUpperCase()}</h1>
            <p>Something went wrong!</p>
            <p><em>{error.error.message}</em></p>
        </div>
    )
}

export default Error