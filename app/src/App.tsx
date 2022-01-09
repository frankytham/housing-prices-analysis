import { useState } from 'react';
import './App.css';

export default function App() {
  const [suburb, setSuburb] = useState('');

  const postSuburb = (event: any) => {
    event.preventDefault();
    fetch('https://housing-prices-analysis.azurewebsites.net/api/list?', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        suburb: suburb
      })
    })
    .catch(err => console.log('An error has occurred'));
  };

  const handleChange = (event: any) => {
    setSuburb(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Housing Prices Analysis</h1>
        <form id="suburb_form" className="App-form" onSubmit={postSuburb}>
          <div>
            <input 
              type="text" 
              id="suburb" 
              className="App-input" 
              placeholder="Suburb" 
              value={suburb} 
              onChange={handleChange} />
            <button type="submit" className="App-button">Submit</button>
          </div>
        </form>
        <p>{process.env.API_PARAM}</p>
        <p>{process.env.API_KEY}</p>
        <a className="App-link" href="https://github.com/frankytham/housing-prices-analysis" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </header>
    </div>
  );
}
