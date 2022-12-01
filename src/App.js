import { useState } from "react";
import './App.css';

function App() {




// const subKey = process.env.MY_KEY;
// console.log(subKey) 

const [displayData, setDisplayData] = useState();
const [inputValue, setInputValue] = useState();


// const subKey = "9132b46f8cd44e85be93aa39db15a4c6"
const uri = encodeURI(inputValue);

const myRequest = {
  method: "GET",
  headers: {
    "Ocp-Apim-Subscription-Key": subKey
  },
};
const searchButton = () => {
  console.log(inputValue);
  fetch(
    `https://api.bing.microsoft.com/v7.0/search?mkt=en-US&q=${uri}`,
    myRequest
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result)
      console.log(result.webPages.value);

      setDisplayData(result.webPages.value);
    });
};



  return (
    <div className="App">
   
   <input
        type="text"
        className="inputText"
        placeholder="Enter text here"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={searchButton}>Search</button>
      <div className="fetchedData">
        {displayData?.map(function (show, index) {
          return <div key={index}>
            <div className="title"><a href={show.url}>{show.name}</a></div>
            <div className="snippet">{show.snippet}</div>
            <div className="url"><a className="link" href={show.displayUrl}>{show.displayUrl}</a></div>
            
            
            </div>;
        })}
      </div>

   
    </div>
  );
}

export default App;
