import { Map, NavigationControl, GeolocateControl } from "react-map-gl"


function MapPage() {
  const mapToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  return (
    <>
      
        <h1>Your places</h1>
        <Map 
        
          mapboxAccessToken={mapToken}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          style={{display: "grid", width: 800 , height: 400 }}
          initialViewState={{
            latitude: 46.16866,
            longitude: 8.75928,
            zoom: 10,
          }}
          maxZoom={20}
          minZoom={3}>
            <GeolocateControl position="top-left"/> 
        <NavigationControl position="top-left"/> 
        
        </Map>
    </>
  );
}

export default MapPage;
