import React from 'react';
import './App.css';
import { ReactMap } from './ReactMap';
import Layers from './Layers';

function App() {
  return 
  <ReactMap> 

    <View center={[0, 0]} zoom={2} />
    
    <Layers>

        <OSMLayer source="osm" opacity={100}/>

        <ESRILayer source="esri" opacity={100}/>

    </Layers>

  </ReactMap>
}

export default App;
