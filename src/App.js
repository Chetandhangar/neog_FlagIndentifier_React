import React , {useState} from 'react';
import './App.css';

const countryFlags = {
  "🇮🇳" : "India",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿" : "Scotland",
  "🏴󠁧󠁢󠁥󠁮󠁧󠁿" : "England",
  "🏴󠁧󠁢󠁷󠁬󠁳󠁿" : "Wales",
  "🇮🇹" : "Italy",
  "🇧🇷" : "Brazil",
  "🇨🇴" : "Colombia",
  "🇩🇪" : "Germany",
  "🇪🇸" : "Spain",
  "🇵🇹" : "Portugal"
  
};



function App() {

  const [countryName, setCountryName] = useState('');

  function inputHandler(event){

    var userInput = event.target.value;
    var countryName = countryFlags[userInput];

    if(userInput in countryFlags)
    {
      setCountryName(countryName);
    }
    else{
      setCountryName("Unable to identifi the Flag");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
       <h1>Flag Identifier</h1>
      </header>

      <div>
      <input onChange={inputHandler}/>
        <div>{countryName}</div>
      </div>
    </div>
  );
}

export default App;
