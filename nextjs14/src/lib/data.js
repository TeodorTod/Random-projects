import { Post, User } from "./models";
import { connectToDb } from "./utils";

// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Gina' },
//     { id: 4, name: 'Dana' },
// ]



// const posts = [
//     { id: 1, title: 'Post 1', body: '....', userId: 1 },
//     { id: 2, title: 'Post 2', body: '....', userId: 2 },
//     { id: 3, title: 'Post 3', body: '....', userId: 3 },
//     { id: 4, title: 'Post 4', body: '....', userId: 4 },
// ]


export const getPosts = async () => {
    await connectToDb(); // Ensure connection is awaited

    try {
        const posts = await Post.find();  // Await the query result
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Error fetching posts!');
    }
};

export const getPost = async (slug) => {
    await connectToDb(); // Ensure connection is awaited

    try {
        const post = await Post.findOne({ slug });  // Await the query result
        return post;
    } catch (error) {
        console.error('Error fetching post:', error);
        throw new Error('Error fetching post!');
    }
};



export const getUser = async (id) => {
    try {
        connectToDb()
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export const getUsers = async () => {
    try {
        connectToDb()
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
