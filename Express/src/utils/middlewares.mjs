import { mockUsers } from './constants.mjs'

export const resolveIndexByUserById = (req, res, next) => {
    const {
        params: { id },
    } = req;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        res.sendStatus(400);
    }
    const index = mockUsers.findIndex((user) => user.id === parsedId);

    if (index === -1) {
        return res.sendStatus(404);
    }
    req.index = index;
    next();
};
