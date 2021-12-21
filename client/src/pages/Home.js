import React from 'react';
import Navbar from '../components/Navbar/Navbar'

import imageResi from '../images/resi.jpeg';
function Home() {
  return (
    <>
    <Navbar/>
    <div>
        <h1>Home</h1>
        <img src={imageResi} width="800" height="600" />
    </div>

    </>
    
    
   
  );
}

export default Home;