import React from 'react'

import { useLocation } from "react-router-dom";
const Graph = () => {
  const location = useLocation();
  const { transaction } = location.state || {};
  return (
    <div>
      <h2>Transaction Charts</h2>
      
    </div>
  );
}

export default Graph