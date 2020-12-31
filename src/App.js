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

  const handleOnSearch = (string, cached) => {
    console.log(string, cached);
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
          <div style={{ marginBottom: 20 }}>Try to type "JavaScript".</div>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
          <div style={{ marginTop: 20 }}>This text will be covered!</div>
        </div>
        <div style={{ width: 200, margin: 20 }}>
          <h3>My custom searchbox!</h3>
          <div style={{ marginBottom: 20 }}>Try to type "JavaScript".</div>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            showIcon={false}
            autoFocus
            styling={{
              border: "1px solid green",
              borderRadius: "4px",
              boxShadow: "none",
              lineColor: "lightGreen",
            }}
          />
          <div style={{ marginTop: 20 }}>This text will be covered!</div>
        </div>
      </header>
    </div>
  );
}

export default App;
