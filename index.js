import express from 'express';
import bodyParser from 'body-parser';
import users from './routes/users.js';

const app = express();
const PORT = 5000;


app.use(bodyParser.json());

app.get('/', (req, res) => res.send("attempt 1 start"));
app.use('/users', users);
app.listen(PORT, () => console.log(`online on http://localhost:${PORT}`));
