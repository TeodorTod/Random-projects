import express from "express";
import routes from './routes/index.mjs';
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(cookieParser('helloworld'));
app.use(session({
    secret: 'test secret',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60000 * 60,

    },
}));
app.use(routes);


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log(req.session);
    console.log(req.session.id);
    req.session.visited = true;
    res.cookie('hello', 'world', {maxAge: 60000 * 60, signed: true});
    res.send('hello')
});


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
