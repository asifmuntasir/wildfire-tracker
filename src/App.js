import { useState, useEffect } from "react";
import Header from "./components/Header";
import LeafletMap from "./components/LeafletMap";
import Loader from "./components/Loader";

function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      .then(res => res.json())
      .then(data => setEventData(data.events))

    setLoading(false);
  }, [])

  return (
    <div>
      <Header />
      {
        !loading ? <LeafletMap eventData={eventData} /> :
          <Loader />
      }
    </div>
  );
}

export default App;