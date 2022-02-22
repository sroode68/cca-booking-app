import {useState, useEffect} from 'react'

const useFetch = (url) => {
  //Defines variables
    const[data, setData] = useState(null)
    const[isLoading, setIsLoading] = useState(true)
    const[error, setError] = useState(null);

    //Checks if there is an error if data is fetched, if there is it lets the user know
    useEffect(() => {
      const abortCont = new AbortController();
  
      setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => {
          setIsLoading(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
           
            setIsLoading(false);
            setError(err.message);
          }
        })
      }, 1000);
  
     
      return () => abortCont.abort();
    }, [url])
  
    return { data, isLoading, error };
  }

export default useFetch;