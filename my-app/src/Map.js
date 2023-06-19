import {useEffect, useRef, useState } from "react"
import MapContext from "./MapContext";
import OlMap from "./olMap";


export function Map(props){

    const mapRef = useRef(null);

    const style = {
      backgroundColor: "gray",
      border: "solid black 1px",
      with: 640,
      height: 480
    };
       
    const [map, setMap] = useState(new OlMap({}))
    
    useEffect(()=>{
        map.setTarget(mapRef.current)
    },[map]) 
    
    return(
      <MapContext.Provider value={[map, setMap]}>
        <div ref={mapRef} style={style}>
          {props.children}
        </div>
      </MapContext.Provider>
    )
}

