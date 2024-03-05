import Map from 'ol/Map.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';



class olMap extends Map {
  
    constructor(options) {

        let init_options = {
            ...options,
            controls: [], 
            interactions: [],
            view: new View({
                projection: "EPSG:4326",
                center: [12, 44],
                zoom: 8,
            }),
            layers:[ new TileLayer({
                source: new OSM(),
            })]
        };

        super(init_options);


    }//end constructor

   

}//end class

export default olMap;