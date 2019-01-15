import fs from 'fs';
import express from 'express';

const app = express();

app.get('/api/generator', (req, res) => {

  res.send('An alligator approaches!');
});

app.listen(3002, () => console.log('Generator app listening on port 3002!'));
