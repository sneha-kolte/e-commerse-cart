import React, { useState, useEffect } from 'react';

const VerticalTabs = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setTabs(data));
  }, []);

  return (
    <div>
      {tabs.map(tab => (
        <div key={tab.id}>
          <h3>{tab.title}</h3>
          <p>{tab.description}</p>
        </div>
      ))}
       // create functional component in react and make api call?  

    </div>
  );
};

export default VerticalTabs;