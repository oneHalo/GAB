import React, { useState } from 'react';
import axios from 'axios';
import SearchComponent from './components/SearchComponenet';

function App() {
    const [prompt, setPrompt] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');

    // const handlePromptChange = (event) => {
    //     setPrompt(event.target.value);
    // };

    const sendPrompt = async () => {
        try {
            const response = await axios.post('http://localhost:3001/generate', { prompt });
            setGeneratedCode(response.data.code);
            setPrompt(response.data.code);
            console.log(response.data.code);
        } catch (error) {
            console.error('Error sending prompt:', error);
            return;
        }
        
    };

    return (
        <div className="App">
           
            <div className='code'>


            </div>
            
            
            <SearchComponent inputValue={prompt} setInputValue={setPrompt} handleSearch={sendPrompt}/>
            {generatedCode}
        </div>
    );
}

export default App;
