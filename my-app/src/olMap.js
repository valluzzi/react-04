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

        
        // These lines keep the map size updated!!!!----------------------------
        // the resizeObserver watch for the map div size changes

        this.resizeObserver = new ResizeObserver(() => {
            //??oldSize newSIze???
            this.updateSize();
        });

        // the resizeObserver must be activated when
        // the TargetElement is not undefined
        this.on("postrender", (e)=>{
            this.resizeObserver.observe(e.target.getTargetElement());
        });

        this.getViewport().addEventListener('contextmenu', function(evt) {
            evt.preventDefault();
        });

    }//end constructor

   

}//end class

export default OlMap;