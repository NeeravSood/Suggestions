import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Suggestions = () => {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (input) {
            axios.get(`/suggestions?query=${input}`)
                .then(response => {
                    setSuggestions(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the suggestions!", error);
                });
        } else {
            setSuggestions([]);
        }
    }, [input]);

    return (
        <div>
            <input 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                placeholder="Type something..." 
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default Suggestions;
