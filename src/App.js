import { useState, useEffect } from "react";
import "./App.css";

const endpoint = "https://fetch-me.vercel.app/api/shopping/items";

function App() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const [activeItems, setActiveItems] = useState([]);

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

      {/* -------------FILTERED ITEMS---------- */}
      <h2>Filtered Items</h2>
      <ul>
        {value === "" ? (
          <h5>Please Enter a search term</h5>
        ) : (
          data
            .filter((item) => {
              return item.name.de.toLowerCase().includes(value.toLowerCase());
            })
            .map((item) => {
              return (
                <li key={item._id}>
                  <button
                    style={{ background: "red" }}
                    type="button"
                    onClick={() => {
                      // Here
                      setActiveItems([...activeItems, item]);
                      setValue("");
                    }}
                  >
                    {item.name.de}
                  </button>
                </li>
              );
            })
        )}
      </ul>
      {/* -----------------ACTIVE ITEMS------- */}
      <h2>Active Items</h2>
      <ul>
        {activeItems.map((item) => {
          return <li key={item._id}>{item.name.de}</li>;
        })}
      </ul>
      {data?.some((item) => {
        return item.name.de.toLowerCase().includes(value.toLowerCase());
      })
        ? null
        : "No matches"}
    </div>
  );
}

export default App;
