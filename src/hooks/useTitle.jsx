import { useEffect } from 'react';

const useTitle = title =>{
    useEffect(() =>{
        document.title  = `${title} | Graphics School`;
    },[title])
}

export default useTitle;