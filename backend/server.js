import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.post("/api/url/shorten", async (req, res) => {
  const { longUrl } = req.body;
  // short url generation logic
  const shortUrl = "http://localhost:5173/" + Math.random().toString(36).substring(7);
  res.json({ shortUrl });
});
