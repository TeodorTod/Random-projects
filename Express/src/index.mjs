import express, { response } from 'express';

const app = express();
app.use(express.json());
const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
}


const PORT = process.env.PORT || 3000;

let mockUsers = [
    { id: 1, username: 'Pesho', displayName: 'Pesho' },
    { id: 2, username: 'Gincho', displayName: 'Gincho' },
    { id: 3, username: 'Stancho', displayName: 'Stancho' },
    { id: 4, username: 'Kyncho', displayName: 'Kyncho' },
    { id: 5, username: 'Yovko', displayName: 'Yovko' },
    { id: 6, username: 'Aron', displayName: 'Aron' },
    { id: 7, username: 'Boris', displayName: 'Boris' },
];

app.get('/',
    (req, res, next) => {
        console.log('Base url 1');
        next();
    },
    (req, res, next) => {
        console.log('Base url 2');
        next();
    },
    (req, res, next) => {
        console.log('Base url 3');
        next();
    }, (req, res) => {
        res.status(201).send({
            "msg": "Hello"
        })
    });

app.get('/api/users', (req, res) => {
    const { query: { filter, value } } = req;
    if (!filter || !value) {
        return res.send(mockUsers);
    }
    if (filter && value) {
        const filteredUsers = mockUsers.filter((user) => {
            return user[filter].includes(value);
        });
        res.send(filteredUsers);
    }
});

app.use(loggingMiddleware, (req, res, next) => {
    console.log('Finished login...');
    next();
});

const resolveIndexByUserById = (req, res, next) => {
    const { params: { id } } = req;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        res.sendStatus(400);
    }
    const index = mockUsers.findIndex((user) => user.id === parsedId);

    if (index === -1) {
        return res.sendStatus(404);
    };
    req.index = index;
    next();
};

app.post('/api/users', (req, res) => {
    const { body } = req;
    console.log(body);
    const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
    mockUsers = [...mockUsers, newUser];
    return res.send(mockUsers);
});

app.get('/api/users/:id', resolveIndexByUserById, (req, res) => {
    const { index } = req;
    const findUser = mockUsers[index];
    if (!findUser) {
        return res.sendStatus(404);
    }
    return res.send(findUser);
});

app.put('/api/users/:id', resolveIndexByUserById, (req, res) => {
    const { body, index } = req;
    mockUsers[index] = { id: mockUsers[index].id, ...body };
    return res.send(mockUsers);
});

app.patch('/api/users/:id', resolveIndexByUserById, (req, res) => {
    const { body, index } = req;
    mockUsers[index] = { ...mockUsers[index], ...body };
    return res.send(mockUsers);
});

app.delete('/api/users/:id', resolveIndexByUserById, (req, res) => {
    const { index } = req;
    mockUsers.splice(index, 1);
    return res.send(mockUsers);
})

app.get('/api/products', (req, res) => {
    res.send([
        { id: 123, name: "hamburger", price: 11.95 }
    ])
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});