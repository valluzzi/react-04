import React, {useEffect, useRef } from "react"
import olMap from "./olMap";


export function ReactMap(props){

    const mapRef = useRef(null);

    const style = {
      backgroundColor: "gray",
      border: "solid black 2px",
      height: 480
    };
       
    const map = new olMap({})
    
    useEffect(()=>{
        map.setTarget(mapRef.current)
    },[]) //eslint-disable-line react-hooks/exhaustive-deps
    
    return(
      
        <div ref={mapRef} style={style}>
          {props.children}
        </div>
      
    )
}

