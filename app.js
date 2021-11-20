const express = require('express');
const app = express();
const router = express.Router();
require('dotenv').config();


const PORT = process.env.PORT || 3000;

router.get('/api/v1/', (req, res) => {
    res.send('Hello World! hi hi');
});


const userRouter = require('./router/user');
 app.use('user', userRouter);

app.listen(PORT, () => {
    console.log('Example app listening on port: '+PORT);
} );