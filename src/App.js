import './App.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import Position from './MarkerPosition';
var location=Position[4];
console.log();
const centre=[location.Longitude, location.Latitude]
function App() {
  return (
    <div className='MainContainer'>
    <MapContainer center={centre} zoom={6}
    style={{width:'100vh',height:'100vh'}}>

      <TileLayer
      url="https://api.maptiler.com/maps/bright-v2/256/{z}/{x}/{y}.png?key=jhLYyEngsebMn6EIBdKk"
      attribution={"https://www.maptiler.com/copyright/" }
      ></TileLayer>
  <div className="City">

{Position.map((Mark) => (

<Marker position={[Mark.Longitude, Mark.Latitude]}>
<Popup>
  {Mark.city} <br />Weather.
</Popup>
</Marker>

))}

</div>
    </MapContainer>
    
    </div>
    );
}

export default App;
