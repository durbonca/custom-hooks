import { useEffect, useState, useRef } from "react"


export const useFetch = ( url ) => {
    
    const isMounted = useRef( true )
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(()=>{
        return () => {
            isMounted.current = false
        }
    },[])

    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(url)
        .then(response => {
            return response.json() })
        .then(data => {
            if( isMounted.current ){    
                setState({
                    data,
                    loading: false,
                    error: null
                })
            }else{
                console.log("setState wasn't called")
            }
        }).catch(error => {
            setState({data: null, loading: false, error})
        })
    },[url])

    return state
}

