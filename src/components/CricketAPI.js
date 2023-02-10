import React from 'react'
import { useGlobalContext } from './Context'

const CricketAPI = () => {
    const {data, isLoading} = useGlobalContext()
    if(isLoading){
        return(
            <>
                <h1>Loading...</h1>
            </>
        )
    }

  return (
    <div className='Cricket-container'>
        {
            data.map((curVal)=>{
                const {name,img, bookmaker_id} =curVal
                return (
                    <div className='card' key={bookmaker_id}>
                        <h1 className='cric-title'>{name}</h1>
                        <img src={img} alt="img-const" className='cric-img'/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CricketAPI