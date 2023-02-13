

import React, { useState, useEffect } from 'react';
import Other from './Other.js';

const App = () => {
  const [headings, setHeadings] = useState('');

  useEffect(() => {
    fetch('apra.html')
      .then(response =>response.text()) 
      .then(data => setHeadings(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Other headings={headings} />
    </div>
  );
};

export default App;
