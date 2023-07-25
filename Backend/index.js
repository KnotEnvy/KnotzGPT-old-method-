require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


// create a simple express api that calls the function below
// add body parser and corrs to express


const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 3080

app.post('/', async (req, res) => {
    const { message, currentModel } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",      //`${currentModel}`,
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
      res.json({
          // data: response.data
          message: (response.data.choices[0].text)
      })
});
app.get('/models', async (req, res) => {
    const response = await openai.listEngines();
    // console.log(response.data.data)
    res.json({
        models: response.data.data
    })
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

