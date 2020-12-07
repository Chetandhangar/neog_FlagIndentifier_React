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
  "🇵🇹" : "Portugal",
  "🇫🇷" : "France"
   
};

var flagList = Object.keys(countryFlags);


function App() {

  const [countryName, setCountryName] = useState('');

  //function to handle User Input
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

  function flagClickHandle(flag) {
    var countryName = countryFlags[flag];
    setCountryName(countryName);
  }

  return (
    <div className="App">

      <header className="App-header">
       <h1>Flag Identifier</h1>
      </header>

     
      <input onChange={inputHandler} className="txt-input"/>

        <div className="country-name">
          Country Name :  
        {" "}{countryName}</div>

        <div>
          <h2>Flags We have in our Database</h2>
          {flagList.map(flag=>{
            return (
                <ul key={flag} className="list list-non-bullet">
                  <li className="list" style={{cursor:"pointer"}} onClick={()=>flagClickHandle(flag)}>{flag}</li>
                </ul>
            
            );
          })}
        </div>

    </div>
  );
}

export default App;
