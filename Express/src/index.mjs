import express from "express";
import routes from './routes/index.mjs';
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser('helloworld'));
app.use(routes);


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.cookie('hello', 'world', {maxAge: 60000 * 60, signed: true});
    res.send('hello')
});


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
