import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Get the current location object, specifically the pathname
  const { pathname } = useLocation();

  // useEffect hook runs after the component renders (or pathname changes)
  useEffect(() => {
    // Scroll the window to the top left corner (coordinates 0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: This effect runs *only* when the pathname changes

  // This component doesn't render anything visual
  return null;
}

export default ScrollToTop;
