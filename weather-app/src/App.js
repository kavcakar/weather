import axios from "axios";
import { useEffect } from "react";
import './App.css';

function App() {
  const key ="a90e03dfd6907f6b2ad98a5503fc568e"
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=15220,pittsburg&appid=${key}`);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[])   

  return (
    <div className="App">
       Hello
    </div>
  );
}

export default App;
