import { Router } from "express";

const router = Router();

router.get("/api/products", (req, res) => {
    res.send([{ id: 123, name: "hamburger", price: 11.95 }]);
});

export default router;