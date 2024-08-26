const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Gina' },
    { id: 4, name: 'Dana' },
]

const posts = [
    { id: 1, title: 'Post 1', body: '....', userId: 1 },
    { id: 2, title: 'Post 2', body: '....', userId: 2 },
    { id: 3, title: 'Post 3', body: '....', userId: 3 },
    { id: 4, title: 'Post 4', body: '....', userId: 4 },
]


export const getPosts = async () => {
    return posts;
};

export const getPost = async (id) => {
    return posts.find((post) => post.id === parseInt(id))
};

// export const getUsers = async () => {
//     return users;
// };

export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id))
};
