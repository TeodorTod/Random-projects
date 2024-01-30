import { Router } from "express";

const router = Router();

router.get("/api/products", (req, res) => {
    console.log(req.headers.cookie);
    console.log(req.cookies);
    if (req.cookies.hello && req.cookies.hello === 'world') {
       return res.send([{ id: 123, name: "hamburger", price: 11.95 }]);
    } 
    return res.status(403).send({msg: 'Sorry, you need the correct cookie!'})
});

export default router;