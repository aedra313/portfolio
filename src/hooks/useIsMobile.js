import React, {useEffect, useState} from 'react';

const useIsMobile = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  });
  useEffect(() => {
    setIsMobile(width < 1440);
  });
  return isMobile;
};

export default useIsMobile;
