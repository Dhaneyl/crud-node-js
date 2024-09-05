import express from 'express';
import bodyParser from 'body-parser';

const app = express();
import useRoutes from './routes/user.js'

app.use(express.json());
const PORT = 5000;

app.use('/users', useRoutes);

app.get('/', (req, res)=>{
    return res.send('hello')
})




app.listen(PORT, ()=> console.log(`Server running on port:  http://localhost:${PORT}`))