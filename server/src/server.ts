import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

// use axios to fetch data internally to avoid CORS error
app.get('/stores', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://mcdonalds-live-engage-api-stage-1.azurewebsites.net/stores.json');
    res.json(response.data); // Assuming you want to send the data back to the client
  } catch (error: any) {
    console.error('Unable to fetch data, getting error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
