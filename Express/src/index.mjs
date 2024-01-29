import express from "express";
import routes from './routes/index.mjs';

const app = express();
app.use(express.json());
app.use(routes);


const PORT = process.env.PORT || 3000;

app.get(
    "/",
    (req, res, next) => {
        console.log("Base url 1");
        next();
    },
    (req, res, next) => {
        console.log("Base url 2");
        next();
    },
    (req, res, next) => {
        console.log("Base url 3");
        next();
    },
    (req, res) => {
        res.status(201).send({
            msg: "Hello",
        });
    }
);


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
