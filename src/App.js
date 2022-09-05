import { useState, useEffect } from "react";
import "./App.css";

const endpoint = "https://fetch-me.vercel.app/api/shopping/items";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(endpoint);
      const json = await response.json();
      setData(json.data);
    }
    fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
