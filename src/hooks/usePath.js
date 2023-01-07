import React from 'react';

const usePath = (expectedPath, isHome) => {
  const [path, setPath] = React.useState(window.location.hash);
  const [result, setResult] = React.useState(false);
  React.useEffect(()=>{
    window.location.hash !== path && setPath(window.location.hash);
    if (!isHome) {
    path.includes(expectedPath) ? setResult(true):setResult(false);
    } else if (isHome) {
    path === '#/' ? setResult(true):setResult(false);
    }
  });
  return result;
};

export default usePath;
