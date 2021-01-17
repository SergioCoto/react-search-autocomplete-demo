import React from "react";
import "./App.css";
import logo from "./sickdoodle.png";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function App() {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const manyItems = [...new Array(10000)].map((_, i) => ({
    id: i,
    name: `something${i}`,
    description:
      "A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. Calls a defined callback function on each element of an array, and returns an array that contains the results.",
  }));

  const movieItems = [
    {
      id: 0,
      title: "Titanic",
      description: "A movie about love",
    },
    {
      id: 1,
      title: "Dead Poets Society",
      description: "A movie about poetry and the meaning of life",
    },
    {
      id: 2,
      title: "Terminator 2",
      description: "A robot from the future is sent back in time",
    },
    {
      id: 3,
      title: "Alien 2",
      description: "Ripley is back for a new adventure",
    },
  ];

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 200, margin: 20 }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "100%", marginBottom: 20 }}
          />
          <div style={{ marginBottom: 20 }}>Try to type "JavaScript"</div>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            styling={{ zIndex: 2 }} // To display it on top of the search box below
            autoFocus
          />
          <div style={{ marginTop: 20 }}>This text will be covered!</div>
        </div>
        <div style={{ width: 200, margin: 20 }}>
          <h2 style={{ marginBottom: 20, fontSize: 30 }}>10000 items!</h2>
          <div style={{ marginBottom: 20 }}>Try to type a number</div>
          <ReactSearchAutocomplete
            items={manyItems}
            maxResults={15}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            fuseOptions={{ keys: ["name", "description"] }} // Search in the description text as well
            styling={{ zIndex: 1 }} // To display it on top of the search box below
          />
          <div style={{ marginTop: 20 }}>This text will be covered!</div>
        </div>
        <div style={{ width: 200, margin: 20 }}>
          <h2 style={{ marginBottom: 20, fontSize: 30 }}>
            My custom searchbox!
          </h2>
          <div style={{ marginBottom: 20 }}>Try to type "Titanic"</div>
          <ReactSearchAutocomplete
            items={movieItems}
            fuseOptions={{ keys: ["title", "description"] }} // Search on both fields
            resultStringKeyName="title" // String to display in the results
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            showIcon={false}
            styling={{
              height: "34px",
              border: "1px solid darkgreen",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "lightgreen",
              color: "darkgreen",
              fontSize: "16px",
              fontFamily: "Arial",
              iconColor: "green",
              lineColor: "lightgreen",
              placeholderColor: "darkgreen",
            }}
          />
          <div style={{ marginTop: 20 }}>This text will be covered!</div>
        </div>
      </header>
    </div>
  );
}

export default App;
