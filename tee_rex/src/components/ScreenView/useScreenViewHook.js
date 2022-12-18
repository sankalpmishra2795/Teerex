// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'

const useScreenViewHook = (setFilterIconShow, setWindowSize, windowSize) => {
      useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); // Empty array ensures that effect is only run on mount


      useEffect(()=> {
        if(windowSize.width < 500){
            setFilterIconShow(true)
        }else{
            setFilterIconShow(false)
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [windowSize])
 
}

export default useScreenViewHook;