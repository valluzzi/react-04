import React, {useEffect, useRef } from "react"
import OlMap from "./olMap";


export function Map(props){

    const mapRef = useRef(null);

    const style = {
      backgroundColor: "gray",
      border: "solid black 1px",
      with: 640,
      height: 480
    };
       
    const map = new OlMap({})
    
    useEffect(()=>{
        map.setTarget(mapRef.current)
    },[]) 
    
    return(
      
        <div ref={mapRef} style={style}>
          {props.children}
        </div>
      
    )
}

