import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

function App() {
  const key = "a90e03dfd6907f6b2ad98a5503fc568e";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
 console.log(search)
  return (
    <div className="App">

    <div class="mb-3 pt-0">
  <input type="text"
  onChange={(e) => setSearch(e.target.value)}
   placeholder="Placeholder"
    class="px-3 w-[250px] py-3 placeholder-bluegray-300 text-bluegray-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "/>
     <City  city={city}/>
    </div>
</div>
);
      
}

export default App; 
