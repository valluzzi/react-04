import {useEffect, useRef, useState } from "react"
import MapContext from "./MapContext";
import OlMap from "./olMap";


export function Map(props){

    const mapRef = useRef(null);

    const style = {
      backgroundColor: "white",
      border: "solid black 1px",
      with: 640,
      height: 480
    };
    
    let inimap = new OlMap({});
    
    const [map, setMap] = useState(inimap)
    
    useEffect(()=>{
        map.setTarget(mapRef.current)
    },[]) // eslint-disable-line
    
    return(
      <MapContext.Provider value={[map, setMap]}>
        <div ref={mapRef} style={style}>
          {props.children}
        </div>
      </MapContext.Provider>
    )
}

