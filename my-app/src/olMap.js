import Map from 'ol/Map.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';

class OlMap extends Map {
  
    constructor(options) {

        let init_options = {
            ...options,
            controls: [], 
            view: new View({
                projection: "EPSG:4326",
                center: [12, 44],
                zoom: 12,
            }),
            layers:[ new TileLayer({
                source: new OSM(),
              })]
        };

        super(init_options);


    }//end constructor

   

}//end class

export default OlMap;