import { useState, useEffect } from "react";
import LeafletMap from "./components/LeafletMap";

function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents();

    // console.log(eventData);
  }, []);

  return (
    <>
      <h1>Hello...Wild Life</h1>
      <LeafletMap />
    </>
  );
}

export default App;