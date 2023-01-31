import './App.css';
import React, {useState, useEffect} from 'react';


function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("")

  useEffect(() => {
      fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  
  }, []);
  
  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  }
  return (
    <div className="App">
      <div className="New">
        <h3>{quote}</h3>
        <p>{author}</p>
      </div>
      <button className="btn" onClick={fetchNewQuote}>New Quote</button>
    </div>
  );
}

export default App;
