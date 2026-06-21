import { useState, useEffect } from 'react';
import './Joker.css';
export default function Joker() {
    const [joke, setJoke] = useState({});
    const url = "https://official-joke-api.appspot.com/random_joke";

    const getnewJoke = async () => {
        let response = await fetch(url);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    };

    useEffect(() => {
        getnewJoke();
    }, []);

 return (
        <div className="joker-container">
            <h1>Joker!</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getnewJoke}>Get New Joke</button>
        </div>
    );
  }