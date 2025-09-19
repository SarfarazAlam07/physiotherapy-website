import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // जब भी पेज का URL बदलेगा, यह इफ़ेक्ट चलेगा
    window.scrollTo(0, 0);
  }, [pathname]); // डिपेंडेंसी में pathname डालने का मतलब है कि यह सिर्फ URL बदलने पर चलेगा

  return null; // यह कंपोनेंट कुछ भी नहीं दिखाता है, यह सिर्फ एक एक्शन करता है
}

export default ScrollToTop;