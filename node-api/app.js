const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
// allow CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // allow CORS
    res.header('Access-Control-Allow-Credentials', 'true'); // allow cookies
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // allow methods
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Requested-With'); // allow headers
    next();
});
app.use(cookieParser());

app.get('/secure', (req, res) => {
    // inspect the cookies 
    console.log(req.cookies);
    res.json({message:'Hello World!'});
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});

