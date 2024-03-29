import React, { useState } from 'react';
import axios from 'axios';
//import './App.css'; // Style your components as needed

function App() {
    const [prompt, setPrompt] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');

    const handlePromptChange = (event) => {
        setPrompt(event.target.value);
    };

    const sendPrompt = async () => {
        try {
            const response = await axios.post('http://localhost:3001/generate', { prompt });
            setGeneratedCode(response.data.code);
        } catch (error) {
            console.error('Error sending prompt:', error);
        }
    };

    return (
        <div className="App">
            <input
                type="text"
                value={prompt}
                onChange={handlePromptChange}
                placeholder="Describe the website you want"
            />
            <button onClick={sendPrompt}>Generate Website</button>
            <iframe title="preview" srcDoc={generatedCode} style={{ width: '100%', height: '500px' }}></iframe>
        </div>
    );
}

export default App;
