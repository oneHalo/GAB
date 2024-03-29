require('dotenv').config();
console.log(process.env.OPENAI_API_KEY);
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/generate', async (req, res) => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                prompt: req.body.prompt,
                max_tokens: 200
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        );
        res.json({ code: response.data.choices[0].text });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).send('Error generating code');
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
   
});
