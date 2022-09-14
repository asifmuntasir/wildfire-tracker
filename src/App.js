import { useState, useEffect } from "react";
import LeafletMap from "./components/LeafletMap";
import Loader from "./components/Loader";

function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     setLoading(true)
  //     const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
  //     const { events } = await res.json()

  //     setEventData(events)
  //     setLoading(false)
  //   }

  //   fetchEvents();

  //   console.log(eventData);
  // }, []);

  useEffect(() => {
    setLoading(true);
    fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      .then(res => res.json())
      .then(data => setEventData(data.events))

    setLoading(false);
  })

  return (
    <>
      <h1>Hello...Wild Life</h1>
      {
        !loading ? <LeafletMap eventData={eventData} /> :
          <Loader />
      }
    </>
  );
}

export default App;