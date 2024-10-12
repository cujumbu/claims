import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ... (rest of your server code remains the same)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});