import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirectiflowres = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.screen.width <= 950) {
      navigate("/lowres");
    }
  }, []);

  return null; 
};

export default Redirectiflowres;