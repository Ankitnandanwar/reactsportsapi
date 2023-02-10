// create a context 
// create provider function
// create consumer (it is replace by useContext hook)

import React,{useContext, useReducer, useEffect} from "react";
import reducer from "./reducer";

let API = 'https://app.sportdataapi.com/api/v1/soccer/bookmakers?apikey=083e0200-a92c-11ed-9e85-c772c2e710ea'

const initialState = {
  isLoading:true,
  data:[]
}

const AppContext = React.createContext()

const AppProvider = ({children}) =>{

  const [state, dispatch] = useReducer(reducer, initialState)

    const fetchApiData = async (url) =>{

      dispatch({type:"SET_LOADING"})

      try {
        const res = await fetch(url)
        const jdata = await res.json()
        console.log(jdata)
        dispatch({type: "GET_DATA",
          payload: {
            data: jdata.data,
          }})
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      fetchApiData(`${API}`)
    },[]);

  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  )
}

// create custom hook

const useGlobalContext = () =>{
  return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}
