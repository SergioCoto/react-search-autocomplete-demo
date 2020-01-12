import React from 'react';
import './App.css';
import logo from "./sickdoodle.png";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function App() {

  const [items, setItems] = React.useState([]);

  React.useEffect(()=>{
     const fetchItems = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setItems(json.map( i => ({
          id: i.id,
          name: i.title,
        })));
      });
    } 
    fetchItems();
  }, [])

  const handleOnSearch = (string, cached) => {
    console.log(string, cached);
  }

  const handleOnSelect = item => {
    console.log(item);
  }

  const handleOnFocus = () => {
    console.log("Focused");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{width: 400, margin: 20}}>
          <img src={logo} alt="logo" style={{marginBottom: 20}} />
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
          <div style={{marginTop: 20}}>This text will be covered!</div>
        </div>

        <div style={{width: 400, margin: 20}}>
          <h2 style={{marginBottom: 20, fontSize: 30}}>My custom searchbox!</h2>
          <ReactSearchAutocomplete
            items={items}
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
          <div style={{marginTop: 20}}>This text will be covered!</div>
        </div>
      </header>
    </div>
  );
}

export default App;
