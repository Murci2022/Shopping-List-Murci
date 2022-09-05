import { useState, useEffect } from "react";
import "./App.css";

const endpoint = "https://fetch-me.vercel.app/api/shopping/items";

function App() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(endpoint);
      const json = await response.json();
      setData(json.data);
    }
    fetchData();
    console.log(data);
  }, []);

  if (data === null) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <label htmlFor="input">Your Shopping Item</label>
      <br />
      <input
        type="text"
        name="input"
        placeholder="type your item here ..."
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <h2>Filtered Items</h2>
      <ul>
        <li>
          <button></button>
        </li>
      </ul>
    </div>
  );
}

export default App;
