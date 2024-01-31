import { Router } from "express";
import { query, validationResult, body } from "express-validator";
import { mockUsers } from '../utils/constants.mjs';
import { resolveIndexByUserById } from '../utils/middlewares.mjs'

const router = Router();


router.get('/api/users', query("filter")
    .isString()
    .withMessage("Must not be a string")
    .notEmpty()
    .withMessage("Must not be empty")
    .isLength({ min: 3, max: 9 })
    .withMessage("Must be between 3 and 9 characters"),
    (req, res) => {
        console.log(req.session.id);
        req.sessionStore.get(req.session.id, (err, sessionData) => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(sessionData);
        });
        let result = validationResult(req);
        const {
            query: { filter, value },
        } = req;
        if (!filter || !value) {
            return res.send(mockUsers);
        }
        if (filter && value) {
            const filteredUsers = mockUsers.filter((user) => {
                return user[filter].includes(value);
            });
            res.send(filteredUsers);
        }
    }
);

router.post(
    "/api/users",
    body("username")
        .notEmpty()
        .withMessage("Username can not be empty"),
    (req, res) => {
        let { body } = req;
        let result = validationResult(req);
        console.log(result);
        let newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
        // let updatedUsers = [...mockUsers, newUser]; 
        // return res.send(updatedUsers);
        mockUsers.push(newUser);
        return res.send(mockUsers);
    }
);

router.get("/api/users/:id", resolveIndexByUserById, (req, res) => {
    const { index } = req;
    const findUser = mockUsers[index];
    if (!findUser) {
        return res.sendStatus(404);
    }
    return res.send(findUser);
});

router.put("/api/users/:id", resolveIndexByUserById, (req, res) => {
    const { body, index } = req;
    mockUsers[index] = { id: mockUsers[index].id, ...body };
    return res.send(mockUsers);
});

router.patch("/api/users/:id", resolveIndexByUserById, (req, res) => {
    const { body, index } = req;
    mockUsers[index] = { ...mockUsers[index], ...body };
    return res.send(mockUsers);
});

router.delete("/api/users/:id", resolveIndexByUserById, (req, res) => {
    const { index } = req;
    mockUsers.splice(index, 1);
    return res.send(mockUsers);
});



export default router;