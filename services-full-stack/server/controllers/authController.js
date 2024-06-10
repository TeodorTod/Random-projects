const registerUser = async (req, res) => {
    try {
        res.status(200).json({ message: "Complete user registration!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to register!" });
    }
};

const loginUser = async (req, res) => {
    console.log('Login attempt');
    try {
        res.status(200).json({ message: "Successful login!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to login!" });
    }
};

const currentUser = async (req, res) => {
    try {
        res.status(200).json({ message: "Successful login!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to get current user!" });
    }
};

module.exports = { registerUser, loginUser, currentUser };
