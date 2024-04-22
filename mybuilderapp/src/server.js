require('dotenv').config({ path: 'C:/Users/wahid/OneDrive/Desktop/inspiration/workOfPatience/gpt-personal-application-builder/code/GAB/mybuilderapp/.env'});
console.log('API Key:', process.env.OPENAI_API_KEY);
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/generate', async (req, res) => {
    const { prompt } = req.body;
    
    // Basic validation to check if the prompt exists
    if (!prompt) {
        return res.status(400).send('Prompt is required');
    }

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: "gpt-3.5-turbo-1106", // Specify the model here
                prompt: prompt,
                max_tokens: 200
            },
            { headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` } }
        );
        res.json({ code: response.data.choices[0].text });
    } catch (error) {
        console.error('Error calling OpenAI API:', error.response?.data || error.message);
        res.status(500).send('Error generating code');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
