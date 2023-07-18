import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const key = "a90e03dfd6907f6b2ad98a5503fc568e";
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, []);

  return (
    <div className="App">
      <div>
        <input className="border-8" type="text" />
      </div>
    </div>
  );
}

export default App;
