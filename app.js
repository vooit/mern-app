import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import userRoutes from './routes/user.server.route';

const app = express();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
})
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3001;
// connect to database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://vooit:Solid234@heavenbase-bu5f3.mongodb.net/users-mern?&w=1", { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

// add Source Map Support
SourceMapSupport.install();
app.use('/api', userRoutes);
app.get('/', (req,res) => {
    return res.end('Api working');
})
// catch 404
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
// start the server
app.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
});