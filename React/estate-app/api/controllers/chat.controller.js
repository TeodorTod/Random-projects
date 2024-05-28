import prisma from "../lib/prisma.js";

export const getChats = async (req, res) => {
    const tokenUserId = req.userId;
    try {
        const chats = await prisma.chat.findMany({
            where: {
                userIDs: {
                    hasSome: [tokenUserId]
                }
            }
        })
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to get chats' })
    }
};

export const getChat = async (req, res) => {
    try {
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to get chat' })
    }
};

export const addChat = async (req, res) => {
    try {
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to add chats' })
    }
};

export const readChat = async (req, res) => {
    try {
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to read chats' })
    }
};



