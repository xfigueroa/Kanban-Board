import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send('Invalid password');
        }
        const secretKey = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        console.log('Generated Token:', token); // Debugging token generation
        return res.status(200).send({ message: 'Login successful.', token });
    }
    catch (err) {
        console.error('Login Error:', err); // Debugging errors
        return res.status(500).send('Internal Server Error');
    }
};
const router = Router();
router.post('/login', login);
export default router;
